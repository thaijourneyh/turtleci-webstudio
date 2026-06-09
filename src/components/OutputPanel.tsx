interface OutputPanelProps {
  html: string;
  onCopy: () => void;
  copyState: 'idle' | 'copied' | 'error';
}

export function OutputPanel({ html, onCopy, copyState }: OutputPanelProps) {
  return (
    <section className="panel stack-md">
      <div className="section-heading compact">
        <div>
          <p className="eyebrow">Output</p>
          <h2>Cleaned HTML for Webflow</h2>
        </div>
        <button className="primary-button" type="button" onClick={onCopy}>
          {copyState === 'copied' ? 'Copied' : copyState === 'error' ? 'Copy failed' : 'Copy for Webflow'}
        </button>
      </div>

      <textarea className="output-textarea" readOnly value={html} />
    </section>
  );
}
