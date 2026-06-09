export const messyGoogleDocsHtml = `
  <h1 style="font-weight:700">2026 Campaign Launch</h1>
  <p class="c1"><span style="font-weight:700">Intro paragraph</span> with random styling and a raw link www.example.com for testing.</p>
  <p>&nbsp;</p>
  <div><span>• First bullet</span></div>
  <div><span>• Second bullet</span></div>
  <h3>Jumped subheading</h3>
  <p><em>Body copy</em> with <span style="font-style:italic">mixed emphasis</span>.</p>
  <table><tr><td>Unsupported table</td></tr></table>
  <p><img src="hero.png" alt="Hero image" /></p>
`;

export const longParagraphHtml = `
  <h1>Long-form content</h1>
  <p>${'This paragraph is intentionally long and repetitive so that the lint rule can detect a run of long paragraphs in a row. '.repeat(4)}</p>
  <p>${'This paragraph is intentionally long and repetitive so that the lint rule can detect a run of long paragraphs in a row. '.repeat(4)}</p>
  <p>${'This paragraph is intentionally long and repetitive so that the lint rule can detect a run of long paragraphs in a row. '.repeat(4)}</p>
`;

export const structuredPlainText = `
# Campaign Overview

THIS IS A SECTION TITLE

Visit www.example.com/resources, for the full brief.

> Pull quote copy that should become a blockquote.

- First item
- Second item

Paragraph with  extra spacing and **markdown-like** emphasis markers.
`.trim();
