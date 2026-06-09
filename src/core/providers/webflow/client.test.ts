import { describe, expect, it } from 'vitest';
import { formatWebflowError, inferFieldKind, inferStatus, mapSchemaFieldKind } from './client';

describe('inferStatus', () => {
  it('maps live item with draft changes to changed', () => {
    expect(inferStatus(true, '2026-03-30T10:00:00.000Z')).toBe('changed');
  });

  it('maps live item without draft to published', () => {
    expect(inferStatus(false, '2026-03-30T10:00:00.000Z')).toBe('published');
  });

  it('maps unpublished staged item to draft', () => {
    expect(inferStatus(true, null)).toBe('draft');
  });
});

describe('inferFieldKind', () => {
  it('treats summary-like fields as long text', () => {
    expect(inferFieldKind('summary', 'A short editorial summary')).toBe('long-text');
  });

  it('treats asset-like objects as image fields', () => {
    expect(inferFieldKind('heroImage', { url: 'https://cdn.example.com/image.png' })).toBe('image');
  });

  it('treats author-style objects as references', () => {
    expect(inferFieldKind('author', { id: 'ref-1', name: 'Editorial Team' })).toBe('reference');
  });
});

describe('formatWebflowError', () => {
  it('explains token failures clearly', () => {
    expect(formatWebflowError(401, '{"message":"Unauthorized"}', 'site_123')).toContain('rejected the token');
  });

  it('explains missing sites clearly', () => {
    expect(formatWebflowError(404, '{"message":"Not found"}', 'site_123')).toContain('site site_123');
  });
});

describe('mapSchemaFieldKind', () => {
  it('maps plain text and rich text from Webflow schema exactly', () => {
    expect(mapSchemaFieldKind('PlainText')).toBe('plain-text');
    expect(mapSchemaFieldKind('RichText')).toBe('rich-text');
  });

  it('maps media and reference schema types', () => {
    expect(mapSchemaFieldKind('Image')).toBe('image');
    expect(mapSchemaFieldKind('Reference')).toBe('reference');
  });
});
