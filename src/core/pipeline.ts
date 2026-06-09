import { LONG_PARAGRAPH_STREAK, LONG_PARAGRAPH_THRESHOLD } from './constants';
import type { BlockNode, InlineNode, Issue, PastePayload, TransformResult } from './types';
import { dedupe, escapeHtml, inlineText, normalizeWhitespace, urlPattern } from './utils';

interface ParseContext {
  imageIndex: number;
  unsupportedTags: string[];
}

const BLOCK_TAGS = new Set(['P', 'DIV', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'UL', 'OL', 'BLOCKQUOTE', 'IMG']);
const ALLOWED_INLINE_TAGS = new Set(['A', 'STRONG', 'B', 'EM', 'I', 'BR', 'SPAN']);
const SUPPORTED_TAGS = new Set([...BLOCK_TAGS, ...ALLOWED_INLINE_TAGS, 'LI']);
const RAW_LIST_PATTERN = /^([\u2022\-*]|\d+[.)])\s+/;
const MARKDOWN_HEADING_PATTERN = /^(#{1,6})\s+(.+)$/;
const BLOCKQUOTE_PATTERN = /^>\s+(.+)$/;

export function transformPaste(payload: PastePayload): TransformResult {
  const context: ParseContext = { imageIndex: 0, unsupportedTags: [] };
  const blocks = payload.html.trim()
    ? parseHtmlToBlocks(payload.html, payload.text, context)
    : parsePlainTextToBlocks(payload.text);

  const normalizedBlocks = normalizeBlocks(blocks);
  const issues = lintBlocks(normalizedBlocks, context.unsupportedTags);
  const cleanedHtml = serializeBlocks(normalizedBlocks);

  return {
    source: payload,
    blocks: normalizedBlocks,
    cleanedHtml,
    previewHtml: cleanedHtml,
    plainText: blocksToPlainText(normalizedBlocks),
    issues,
    debug: {
      unsupportedTags: dedupe(context.unsupportedTags),
    },
  };
}

export function createEmptyResult(): TransformResult {
  return transformPaste({ html: '', text: '' });
}

function parseHtmlToBlocks(html: string, fallbackText: string, context: ParseContext): BlockNode[] {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const body = doc.body;

  cleanDocument(body, context);

  const blocks = nodesToBlocks(Array.from(body.childNodes), context);
  if (blocks.length > 0) {
    return blocks;
  }

  return parsePlainTextToBlocks(fallbackText || body.textContent || '');
}

function cleanDocument(root: HTMLElement, context: ParseContext): void {
  const comments = root.ownerDocument.createNodeIterator(root, NodeFilter.SHOW_COMMENT);
  const commentNodes: Comment[] = [];
  let currentComment = comments.nextNode();
  while (currentComment) {
    commentNodes.push(currentComment as Comment);
    currentComment = comments.nextNode();
  }
  commentNodes.forEach((node) => node.parentNode?.removeChild(node));

  Array.from(root.querySelectorAll('*')).forEach((element) => {
    Array.from(element.attributes).forEach((attribute) => {
      const name = attribute.name.toLowerCase();
      if (name === 'href' || name === 'src' || name === 'alt') {
        return;
      }
      element.removeAttribute(attribute.name);
    });

    if (!SUPPORTED_TAGS.has(element.tagName)) {
      context.unsupportedTags.push(element.tagName.toLowerCase());
    }

    if (element.tagName === 'DIV' && !containsBlockChildren(element)) {
      const p = element.ownerDocument.createElement('p');
      while (element.firstChild) {
        p.appendChild(element.firstChild);
      }
      element.replaceWith(p);
    }

    if (element.tagName === 'IMG') {
      const placeholder = element.ownerDocument.createElement('p');
      const alt = normalizeWhitespace(element.getAttribute('alt') || '');
      context.imageIndex += 1;
      const label = alt ? `[IMAGE ${context.imageIndex}: ${alt}]` : `[IMAGE ${context.imageIndex}]`;
      placeholder.textContent = label;
      element.replaceWith(placeholder);
    }

    if (!SUPPORTED_TAGS.has(element.tagName) && element.tagName !== 'BODY') {
      element.replaceWith(...Array.from(element.childNodes));
    }
  });
}

function containsBlockChildren(element: Element): boolean {
  return Array.from(element.children).some((child) => BLOCK_TAGS.has(child.tagName));
}

function nodesToBlocks(nodes: ChildNode[], context: ParseContext): BlockNode[] {
  const blocks: BlockNode[] = [];

  for (const node of nodes) {
    if (node.nodeType === Node.TEXT_NODE) {
      const value = normalizeWhitespace(node.textContent || '');
      if (value) {
        blocks.push(...paragraphOrListBlocks([value]));
      }
      continue;
    }

    if (node.nodeType !== Node.ELEMENT_NODE) {
      continue;
    }

    const element = node as HTMLElement;
    if (element.tagName === 'P' || element.tagName === 'DIV') {
      const children = inlineNodesFromChildren(Array.from(element.childNodes));
      const text = inlineText(children);
      if (text.startsWith('[IMAGE ')) {
        blocks.push(imagePlaceholderFromText(text));
        continue;
      }
      const normalizedChildren = normalizeInlineNodes(children);
      if (!inlineText(normalizedChildren)) {
        continue;
      }
      blocks.push({
        type: 'paragraph',
        children: normalizedChildren,
      });
      continue;
    }

    if (/^H[1-6]$/.test(element.tagName)) {
      const level = Number(element.tagName[1]) as 1 | 2 | 3 | 4 | 5 | 6;
      const children = normalizeInlineNodes(inlineNodesFromChildren(Array.from(element.childNodes)));
      if (inlineText(children)) {
        blocks.push({ type: 'heading', level, children });
      }
      continue;
    }

    if (element.tagName === 'UL' || element.tagName === 'OL') {
      const items = Array.from(element.children)
        .filter((child) => child.tagName === 'LI')
        .map((child) => normalizeInlineNodes(inlineNodesFromChildren(Array.from(child.childNodes))))
        .filter((item) => inlineText(item));

      if (items.length > 0) {
        blocks.push({
          type: 'list',
          style: element.tagName === 'UL' ? 'unordered' : 'ordered',
          items,
        });
      }
      continue;
    }

    if (element.tagName === 'BLOCKQUOTE') {
      const children = normalizeInlineNodes(inlineNodesFromChildren(Array.from(element.childNodes)));
      if (inlineText(children)) {
        blocks.push({ type: 'blockquote', children });
      }
      continue;
    }

    if (element.tagName === 'IMG') {
      context.imageIndex += 1;
      blocks.push({ type: 'imagePlaceholder', index: context.imageIndex });
    }
  }

  return blocks;
}

function paragraphOrListBlocks(lines: string[]): BlockNode[] {
  const normalized = lines.map((line) => normalizeWhitespace(line)).filter(Boolean);
  if (normalized.length === 0) {
    return [];
  }

  if (normalized.every((line) => RAW_LIST_PATTERN.test(line))) {
    const style = normalized.every((line) => /^\d+[.)]\s+/.test(line)) ? 'ordered' : 'unordered';
    return [
      {
        type: 'list',
        style,
        items: normalized.map((line) => [{ type: 'text', text: line.replace(RAW_LIST_PATTERN, '') }]),
      },
    ];
  }

  return normalized.map((line) => {
    if (line.startsWith('[IMAGE ')) {
      return imagePlaceholderFromText(line);
    }

    return {
      type: 'paragraph',
      children: normalizeInlineNodes(textToInlineNodes(line)),
    } as BlockNode;
  });
}

function parsePlainTextToBlocks(text: string): BlockNode[] {
  return text
    .replace(/\r\n/g, '\n')
    .split(/\n{2,}/)
    .flatMap((chunk) => {
      const lines = chunk
        .split('\n')
        .map((line) => normalizeWhitespace(line))
        .filter(Boolean);

      if (lines.length === 0) {
        return [];
      }

      if (lines.every((line) => RAW_LIST_PATTERN.test(line))) {
        return paragraphOrListBlocks(lines);
      }

      if (lines.every((line) => BLOCKQUOTE_PATTERN.test(line))) {
        return [
          {
            type: 'blockquote',
            children: normalizeInlineNodes(
              textToInlineNodes(lines.map((line) => line.replace(BLOCKQUOTE_PATTERN, '$1')).join(' ')),
            ),
          } as BlockNode,
        ];
      }

      if (lines.length === 1) {
        const headingBlock = headingFromText(lines[0]);
        if (headingBlock) {
          return [headingBlock];
        }
      }

      return [
        {
          type: 'paragraph',
          children: normalizeInlineNodes(textToInlineNodes(lines.join(' '))),
        } as BlockNode,
      ];
    });
}

function inlineNodesFromChildren(nodes: ChildNode[]): InlineNode[] {
  const result: InlineNode[] = [];

  for (const node of nodes) {
    if (node.nodeType === Node.TEXT_NODE) {
      result.push(...textToInlineNodes(node.textContent || ''));
      continue;
    }

    if (node.nodeType !== Node.ELEMENT_NODE) {
      continue;
    }

    const element = node as HTMLElement;
    const children = normalizeInlineNodes(inlineNodesFromChildren(Array.from(element.childNodes)));

    switch (element.tagName) {
      case 'STRONG':
      case 'B':
        if (children.length > 0) {
          result.push({ type: 'bold', children });
        }
        break;
      case 'EM':
      case 'I':
        if (children.length > 0) {
          result.push({ type: 'italic', children });
        }
        break;
      case 'A': {
        const href = normalizeLink(element.getAttribute('href') || inlineText(children));
        if (children.length > 0) {
          result.push({ type: 'link', href, children });
        }
        break;
      }
      case 'BR':
        result.push({ type: 'text', text: ' ' });
        break;
      default:
        result.push(...children);
        break;
    }
  }

  return result;
}

function textToInlineNodes(text: string): InlineNode[] {
  const nodes: InlineNode[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(urlPattern)) {
    const index = match.index ?? 0;
    const raw = match[0];
    const normalizedRaw = stripTrailingUrlPunctuation(raw);
    const trailingPunctuation = raw.slice(normalizedRaw.length);
    if (index > lastIndex) {
      nodes.push({ type: 'text', text: text.slice(lastIndex, index) });
    }
    nodes.push({
      type: 'link',
      href: normalizeLink(normalizedRaw),
      children: [{ type: 'text', text: normalizedRaw }],
    });
    if (trailingPunctuation) {
      nodes.push({ type: 'text', text: trailingPunctuation });
    }
    lastIndex = index + raw.length;
  }

  if (lastIndex < text.length) {
    nodes.push({ type: 'text', text: text.slice(lastIndex) });
  }

  return normalizeInlineNodes(nodes);
}

function normalizeBlocks(blocks: BlockNode[]): BlockNode[] {
  const normalized: BlockNode[] = [];

  for (const block of blocks) {
    if (block.type === 'paragraph') {
      const text = inlineText(block.children);
      if (!text) {
        continue;
      }

      if (RAW_LIST_PATTERN.test(text)) {
        const listStyle = /^\d+[.)]\s+/.test(text) ? 'ordered' : 'unordered';
        const listText = text.replace(RAW_LIST_PATTERN, '');
        const lastBlock = normalized.at(-1);

        if (lastBlock?.type === 'list' && lastBlock.style === listStyle) {
          lastBlock.items.push(normalizeInlineNodes(textToInlineNodes(listText)));
        } else {
          normalized.push({
            type: 'list',
            style: listStyle,
            items: [normalizeInlineNodes(textToInlineNodes(listText))],
          });
        }
        continue;
      }

      normalized.push({ ...block, children: normalizeInlineNodes(block.children) });
      continue;
    }

    if (block.type === 'heading' || block.type === 'blockquote') {
      const text = inlineText(block.children);
      if (!text) {
        continue;
      }
      normalized.push({ ...block, children: normalizeInlineNodes(block.children) });
      continue;
    }

    if (block.type === 'list') {
      const items = block.items.map((item) => normalizeInlineNodes(item)).filter((item) => inlineText(item));
      if (items.length === 0) {
        continue;
      }
      normalized.push({ ...block, items });
      continue;
    }

    normalized.push(block);
  }

  return normalized;
}

function normalizeInlineNodes(nodes: InlineNode[]): InlineNode[] {
  const flattened: InlineNode[] = [];

  for (const node of nodes) {
    if (node.type === 'text') {
      const cleaned = node.text.replace(/\u00a0/g, ' ').replace(/\s+/g, ' ');
      if (!cleaned.trim()) {
        continue;
      }

      const previous = flattened.at(-1);
      if (previous?.type === 'text') {
        previous.text += cleaned;
      } else {
        flattened.push({ type: 'text', text: cleaned });
      }
      continue;
    }

    const children = normalizeInlineNodes(node.children);
    if (children.length === 0) {
      continue;
    }

    if (node.type === 'link') {
      flattened.push({ ...node, href: normalizeLink(node.href), children });
      continue;
    }

    if (children.length === 1 && children[0].type === node.type) {
      flattened.push(children[0]);
      continue;
    }

    flattened.push({ ...node, children });
  }

  return flattened.map<InlineNode>((node, index) => {
    if (node.type !== 'text') {
      return node;
    }

    const previous = flattened[index - 1];
    const next = flattened[index + 1];
    let text = node.text;

    if (!previous) {
      text = text.replace(/^\s+/, '');
    }
    if (!next) {
      text = text.replace(/\s+$/, '');
    }

    return { type: 'text' as const, text };
  }).filter((node) => node.type !== 'text' || node.text.trim() !== '');
}

function imagePlaceholderFromText(text: string): BlockNode {
  const match = text.match(/^\[IMAGE\s+(\d+)(?::\s*(.+))?\]$/i);
  const index = Number(match?.[1] || '1');
  const alt = match?.[2]?.trim();
  return { type: 'imagePlaceholder', index, alt };
}

function headingFromText(text: string): BlockNode | null {
  const markdownMatch = text.match(MARKDOWN_HEADING_PATTERN);
  if (markdownMatch) {
    return {
      type: 'heading',
      level: Math.min(markdownMatch[1].length, 6) as 1 | 2 | 3 | 4 | 5 | 6,
      children: normalizeInlineNodes(textToInlineNodes(markdownMatch[2])),
    };
  }

  const normalized = normalizeWhitespace(text);
  const words = normalized.split(' ').filter(Boolean);
  const looksLikeShortHeading =
    words.length > 0 &&
    words.length <= 10 &&
    normalized.length <= 72 &&
    !/[.!?]$/.test(normalized) &&
    /^[A-Z0-9\s:/&-]+$/.test(normalized);

  if (looksLikeShortHeading) {
    return {
      type: 'heading',
      level: 2,
      children: [{ type: 'text', text: normalized }],
    };
  }

  return null;
}

function normalizeLink(href: string): string {
  const trimmed = href.trim();
  if (!trimmed) {
    return '#';
  }
  if (/^https?:\/\//i.test(trimmed) || /^mailto:/i.test(trimmed)) {
    return trimmed;
  }
  if (/^www\./i.test(trimmed)) {
    return `https://${trimmed}`;
  }
  return trimmed;
}

function stripTrailingUrlPunctuation(value: string): string {
  return value.replace(/[),.;:!?]+$/g, '');
}

function lintBlocks(blocks: BlockNode[], unsupportedTags: string[]): Issue[] {
  const issues: Issue[] = [];
  let previousHeadingLevel = 0;
  let longParagraphStreak = 0;

  blocks.forEach((block) => {
    if (block.type === 'heading') {
      if (previousHeadingLevel && block.level > previousHeadingLevel + 1) {
        issues.push({
          code: 'heading-hierarchy',
          severity: 'warning',
          message: `Heading level jumps from H${previousHeadingLevel} to H${block.level}.`,
        });
      }
      previousHeadingLevel = block.level;
    }

    if (block.type === 'paragraph') {
      const text = inlineText(block.children);
      if (text.length >= LONG_PARAGRAPH_THRESHOLD) {
        longParagraphStreak += 1;
      } else {
        longParagraphStreak = 0;
      }

      if (longParagraphStreak >= LONG_PARAGRAPH_STREAK) {
        issues.push({
          code: 'long-paragraph-streak',
          severity: 'info',
          message: 'Several long paragraphs appear in a row. Consider adding subheads, lists, or pull quotes.',
        });
        longParagraphStreak = 0;
      }

      if ((text.match(/\*\*|__|~~/g) || []).length > 0) {
        issues.push({
          code: 'suspicious-formatting',
          severity: 'warning',
          message: 'Literal markdown-style formatting markers were detected in paragraph text.',
        });
      }

      if (/[ \t]{2,}/.test(text)) {
        issues.push({
          code: 'suspicious-formatting',
          severity: 'info',
          message: 'Multiple consecutive spaces were detected in paragraph text.',
        });
      }
    }

    if (block.type === 'imagePlaceholder') {
      issues.push({
        code: 'image-placeholder',
        severity: 'info',
        message: `Image ${block.index} will paste as a placeholder for v1.`,
      });
    }

    const rawUrlFound = collectInlineNodes(block).some(
      (node) => node.type === 'link' && /^(https?:\/\/|www\.)/i.test(inlineText(node.children).trim()),
    );

    if (rawUrlFound) {
      issues.push({
        code: 'raw-url',
        severity: 'info',
        message: 'A raw URL was converted into a normalized link.',
      });
    }
  });

  if (unsupportedTags.length > 0) {
    issues.push({
      code: 'unsupported-structure',
      severity: 'warning',
      message: `Unsupported structures were flattened: ${dedupe(unsupportedTags).join(', ')}.`,
    });
  }

  return issues;
}

function collectInlineNodes(block: BlockNode): InlineNode[] {
  switch (block.type) {
    case 'heading':
    case 'paragraph':
    case 'blockquote':
      return flattenInline(block.children);
    case 'list':
      return block.items.flatMap((item) => flattenInline(item));
    case 'imagePlaceholder':
      return [];
  }
}

function flattenInline(nodes: InlineNode[]): InlineNode[] {
  return nodes.flatMap((node) => {
    if (node.type === 'text') {
      return [node];
    }
    return [node, ...flattenInline(node.children)];
  });
}

function serializeInline(nodes: InlineNode[]): string {
  return nodes
    .map((node) => {
      switch (node.type) {
        case 'text':
          return escapeHtml(node.text);
        case 'bold':
          return `<strong>${serializeInline(node.children)}</strong>`;
        case 'italic':
          return `<em>${serializeInline(node.children)}</em>`;
        case 'link':
          return `<a href="${escapeHtml(node.href)}">${serializeInline(node.children)}</a>`;
      }
    })
    .join('');
}

function serializeBlocks(blocks: BlockNode[]): string {
  return blocks
    .map((block) => {
      switch (block.type) {
        case 'heading':
          return `<h${block.level}>${serializeInline(block.children)}</h${block.level}>`;
        case 'paragraph':
          return `<p>${serializeInline(block.children)}</p>`;
        case 'list': {
          const tag = block.style === 'unordered' ? 'ul' : 'ol';
          const items = block.items.map((item) => `<li>${serializeInline(item)}</li>`).join('');
          return `<${tag}>${items}</${tag}>`;
        }
        case 'blockquote':
          return `<blockquote><p>${serializeInline(block.children)}</p></blockquote>`;
        case 'imagePlaceholder': {
          const text = block.alt
            ? `[IMAGE ${block.index}: ${block.alt}]`
            : `[IMAGE ${block.index}]`;
          return `<p>${escapeHtml(text)}</p>`;
        }
      }
    })
    .join('\n');
}

function blocksToPlainText(blocks: BlockNode[]): string {
  return blocks
    .map((block) => {
      switch (block.type) {
        case 'heading':
        case 'paragraph':
        case 'blockquote':
          return inlineText(block.children);
        case 'list':
          return block.items.map((item, index) => {
            const marker = block.style === 'ordered' ? `${index + 1}.` : '-';
            return `${marker} ${inlineText(item)}`;
          }).join('\n');
        case 'imagePlaceholder':
          return block.alt ? `[IMAGE ${block.index}: ${block.alt}]` : `[IMAGE ${block.index}]`;
      }
    })
    .join('\n\n');
}
