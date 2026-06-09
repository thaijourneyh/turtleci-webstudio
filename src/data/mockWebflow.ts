import type { PublishAction, WebflowCollection, WebflowConnection, WebflowEntry } from '../core/domain/webflow';

export const mockConnections: WebflowConnection[] = [
  {
    id: 'site-acme',
    name: 'Acme Growth Site',
    siteId: 'wf_site_acme',
    workspaceLabel: 'Marketing Team',
    tokenRef: 'keychain://webflow/site-acme',
    status: 'connected',
    lastSyncedAt: '2026-03-30T16:42:00+07:00',
    collections: 4,
  },
  {
    id: 'site-labs',
    name: 'Acme Labs',
    siteId: 'wf_site_labs',
    workspaceLabel: 'Brand Studio',
    tokenRef: 'keychain://webflow/site-labs',
    status: 'attention',
    lastSyncedAt: '2026-03-29T11:15:00+07:00',
    collections: 3,
  },
];

export const mockCollections: WebflowCollection[] = [
  { id: 'blog', connectionId: 'site-acme', name: 'Blog Posts', slug: 'blog-posts', fields: 9, entries: 128 },
  { id: 'guides', connectionId: 'site-acme', name: 'Guides', slug: 'guides', fields: 11, entries: 42 },
  { id: 'news', connectionId: 'site-labs', name: 'Newsroom', slug: 'newsroom', fields: 7, entries: 16 },
];

export const mockEntries: WebflowEntry[] = [
  {
    id: 'entry-1',
    connectionId: 'site-acme',
    collectionId: 'blog',
    name: 'How We Scaled Brand Experiments',
    slug: 'scaled-brand-experiments',
    status: 'changed',
    updatedAt: '2026-03-30T15:10:00+07:00',
    fields: [
      { id: 'title', slug: 'title', label: 'Title', kind: 'plain-text', value: 'How We Scaled Brand Experiments' },
      { id: 'slug', slug: 'slug', label: 'Slug', kind: 'slug', value: 'scaled-brand-experiments' },
      {
        id: 'summary',
        slug: 'summary',
        label: 'Summary',
        kind: 'long-text',
        value: 'A closer look at how the team tightened editorial workflows across campaigns, landing pages, and the resource hub.',
      },
      { id: 'publishedDate', slug: 'publishedDate', label: 'Published Date', kind: 'date', value: '2026-03-30T08:00' },
      { id: 'featured', slug: 'featured', label: 'Featured', kind: 'toggle', value: true },
      {
        id: 'heroImage',
        slug: 'heroImage',
        label: 'Hero Image',
        kind: 'image',
        value: { fileName: 'brand-experiments-hero.avif', url: 'https://cdn.example.com/brand-experiments-hero.avif' },
      },
      { id: 'author', slug: 'author', label: 'Author', kind: 'reference', value: { id: 'team-1', name: 'Marketing Editorial Team' } },
      {
        id: 'body',
        slug: 'body',
        label: 'Body',
        kind: 'rich-text',
        value:
          '<h2>Why this matters</h2><p>We turned a scattered publishing workflow into a tighter editorial loop across two sites.</p><p>Use the rich text assistant below to normalize pasted content before saving or publishing.</p>',
      },
    ],
  },
  {
    id: 'entry-2',
    connectionId: 'site-acme',
    collectionId: 'blog',
    name: 'Quarterly Editorial Themes',
    slug: 'quarterly-editorial-themes',
    status: 'draft',
    updatedAt: '2026-03-30T09:05:00+07:00',
    fields: [
      { id: 'title', slug: 'title', label: 'Title', kind: 'plain-text', value: 'Quarterly Editorial Themes' },
      { id: 'slug', slug: 'slug', label: 'Slug', kind: 'slug', value: 'quarterly-editorial-themes' },
      {
        id: 'summary',
        slug: 'summary',
        label: 'Summary',
        kind: 'long-text',
        value: 'Editorial pillars and campaign support themes planned for the quarter.',
      },
      {
        id: 'body',
        slug: 'body',
        label: 'Body',
        kind: 'rich-text',
        value: '<p>Outline the themes, planned launches, and supporting campaigns for the quarter.</p>',
      },
    ],
  },
  {
    id: 'entry-3',
    connectionId: 'site-labs',
    collectionId: 'news',
    name: 'Lab Notes March Update',
    slug: 'lab-notes-march-update',
    status: 'published',
    updatedAt: '2026-03-28T18:20:00+07:00',
    fields: [
      { id: 'title', slug: 'title', label: 'Title', kind: 'plain-text', value: 'Lab Notes March Update' },
      { id: 'slug', slug: 'slug', label: 'Slug', kind: 'slug', value: 'lab-notes-march-update' },
      {
        id: 'body',
        slug: 'body',
        label: 'Body',
        kind: 'rich-text',
        value: '<p>Published update for experiments, releases, and platform changes.</p>',
      },
    ],
  },
];

export const defaultPublishAction: PublishAction = {
  canSaveDraft: true,
  canPublish: true,
  confirmationLabel: 'Publish changes to Webflow',
};
