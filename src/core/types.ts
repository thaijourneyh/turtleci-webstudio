export type InlineNode =
  | { type: 'text'; text: string }
  | { type: 'bold'; children: InlineNode[] }
  | { type: 'italic'; children: InlineNode[] }
  | { type: 'link'; href: string; children: InlineNode[] };

export type BlockNode =
  | { type: 'heading'; level: 1 | 2 | 3 | 4 | 5 | 6; children: InlineNode[] }
  | { type: 'paragraph'; children: InlineNode[] }
  | { type: 'list'; style: 'unordered' | 'ordered'; items: InlineNode[][] }
  | { type: 'blockquote'; children: InlineNode[] }
  | { type: 'imagePlaceholder'; index: number; alt?: string; caption?: string };

export type IssueSeverity = 'info' | 'warning';

export interface Issue {
  code:
    | 'heading-hierarchy'
    | 'raw-url'
    | 'long-paragraph-streak'
    | 'unsupported-structure'
    | 'suspicious-formatting'
    | 'image-placeholder';
  severity: IssueSeverity;
  message: string;
}

export interface PastePayload {
  html: string;
  text: string;
}

export interface TransformResult {
  source: PastePayload;
  blocks: BlockNode[];
  cleanedHtml: string;
  previewHtml: string;
  plainText: string;
  issues: Issue[];
  debug: {
    unsupportedTags: string[];
  };
}
