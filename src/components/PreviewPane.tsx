interface PreviewPaneProps {
  html: string;
}

export function PreviewPane({ html }: PreviewPaneProps) {
  return (
    <section className="panel preview-panel stack-md">
      <div className="section-heading compact">
        <div>
          <p className="eyebrow">Preview</p>
          <h2>Approximate Webflow Rich Text feel</h2>
        </div>
      </div>

      <div className="article-preview" dangerouslySetInnerHTML={{ __html: html || '<p>Preview will appear here.</p>' }} />
    </section>
  );
}
