import type { InlineNode } from './types';

export const urlPattern = /(https?:\/\/[^\s<]+|www\.[^\s<]+)/gi;

export function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export function normalizeWhitespace(value: string): string {
  return value.replace(/\u00a0/g, ' ').replace(/\s+/g, ' ').trim();
}

export function splitIntoParagraphs(text: string): string[] {
  return text
    .replace(/\r\n/g, '\n')
    .split(/\n{2,}/)
    .map((chunk) => normalizeWhitespace(chunk.replace(/\n+/g, ' ')))
    .filter(Boolean);
}

export function inlineText(nodes: InlineNode[]): string {
  return nodes
    .map((node) => {
      switch (node.type) {
        case 'text':
          return node.text;
        case 'bold':
        case 'italic':
        case 'link':
          return inlineText(node.children);
      }
    })
    .join('');
}

export function dedupe<T>(items: T[]): T[] {
  return Array.from(new Set(items));
}
