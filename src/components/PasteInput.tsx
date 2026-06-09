import { useRef, type ClipboardEvent } from 'react';
import type { PastePayload } from '../core/types';

interface PasteInputProps {
  payload: PastePayload;
  onPayloadChange: (payload: PastePayload) => void;
  onLoadFixture: () => void;
}

export function PasteInput({ payload, onPayloadChange, onLoadFixture }: PasteInputProps) {
  const zoneRef = useRef<HTMLDivElement>(null);

  function handlePaste(event: ClipboardEvent<HTMLDivElement>) {
    const html = event.clipboardData.getData('text/html');
    const text = event.clipboardData.getData('text/plain');
    event.preventDefault();
    onPayloadChange({ html, text });
    if (zoneRef.current) {
      zoneRef.current.textContent = text;
    }
  }

  return (
    <section className="panel stack-lg">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Source</p>
          <h2>Paste from Google Docs</h2>
        </div>
        <button className="ghost-button" onClick={onLoadFixture} type="button">
          Load sample messy paste
        </button>
      </div>

      <div
        ref={zoneRef}
        className="paste-zone"
        contentEditable
        suppressContentEditableWarning
        onPaste={handlePaste}
        data-placeholder="Paste rich content here to capture HTML and text"
      >
        {payload.text}
      </div>

      <label className="field-label" htmlFor="plain-text-input">
        Plain text fallback
      </label>
      <textarea
        id="plain-text-input"
        className="source-textarea"
        value={payload.text}
        onChange={(event) => onPayloadChange({ ...payload, text: event.target.value })}
        placeholder="Type or clean up plain text here if needed"
      />

      <details className="source-meta">
        <summary>Captured HTML</summary>
        <pre>{payload.html || 'No HTML captured yet. Paste directly from Google Docs into the rich paste zone above.'}</pre>
      </details>
    </section>
  );
}
