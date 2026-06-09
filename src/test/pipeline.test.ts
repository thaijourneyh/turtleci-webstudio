import { describe, expect, it } from 'vitest';
import { transformPaste } from '../core/pipeline';
import { longParagraphHtml, messyGoogleDocsHtml, structuredPlainText } from '../fixtures/googleDocsSamples';

describe('transformPaste', () => {
  it('cleans Google Docs HTML into safe Webflow-friendly markup', () => {
    const result = transformPaste({
      html: messyGoogleDocsHtml,
      text: 'Fallback text',
    });

    expect(result.cleanedHtml).toContain('<h1>2026 Campaign Launch</h1>');
    expect(result.cleanedHtml).toContain('<ul><li>First bullet</li><li>Second bullet</li></ul>');
    expect(result.cleanedHtml).toContain('[IMAGE 1: Hero image]');
    expect(result.cleanedHtml).not.toContain('style=');
    expect(result.cleanedHtml).not.toContain('<table>');
  });

  it('reports hierarchy and unsupported structure issues', () => {
    const result = transformPaste({
      html: messyGoogleDocsHtml,
      text: 'Fallback text',
    });

    expect(result.issues.some((issue) => issue.code === 'heading-hierarchy')).toBe(true);
    expect(result.issues.some((issue) => issue.code === 'unsupported-structure')).toBe(true);
    expect(result.issues.some((issue) => issue.code === 'image-placeholder')).toBe(true);
  });

  it('flags long paragraph streaks', () => {
    const result = transformPaste({
      html: longParagraphHtml,
      text: '',
    });

    expect(result.issues.some((issue) => issue.code === 'long-paragraph-streak')).toBe(true);
  });

  it('falls back to plain text paragraphs when html is missing', () => {
    const result = transformPaste({
      html: '',
      text: 'Headline\n\nFirst paragraph\n\n- one\n- two',
    });

    expect(result.cleanedHtml).toContain('<p>Headline</p>');
    expect(result.cleanedHtml).toContain('<p>First paragraph</p>');
    expect(result.cleanedHtml).toContain('<ul><li>one</li><li>two</li></ul>');
  });

  it('normalizes markdown headings, blockquotes, and raw links in plain text', () => {
    const result = transformPaste({
      html: '',
      text: structuredPlainText,
    });

    expect(result.cleanedHtml).toContain('<h1>Campaign Overview</h1>');
    expect(result.cleanedHtml).toContain('<h2>THIS IS A SECTION TITLE</h2>');
    expect(result.cleanedHtml).toContain('<blockquote><p>Pull quote copy that should become a blockquote.</p></blockquote>');
    expect(result.cleanedHtml).toContain('<a href="https://www.example.com/resources">www.example.com/resources</a>,');
    expect(result.cleanedHtml).toContain('<ul><li>First item</li><li>Second item</li></ul>');
  });

  it('flags suspicious formatting patterns in plain text content', () => {
    const result = transformPaste({
      html: '',
      text: structuredPlainText,
    });

    expect(result.issues.some((issue) => issue.code === 'suspicious-formatting')).toBe(true);
    expect(result.issues.some((issue) => issue.code === 'raw-url')).toBe(true);
  });
});
