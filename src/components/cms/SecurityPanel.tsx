export function SecurityPanel() {
  return (
    <section className="panel stack-md security-panel">
      <div className="section-heading compact">
        <div>
          <p className="eyebrow">Security</p>
          <h2>Local-only protection model</h2>
        </div>
      </div>

      <ul className="security-list">
        <li>Store Webflow tokens in macOS Keychain only.</li>
        <li>Cache collections and entries locally in SQLite, but never persist auth secrets there.</li>
        <li>Keep save and publish actions separate, with confirmation before publish.</li>
        <li>Mask token values and avoid logging authorization headers or raw tokens.</li>
      </ul>
    </section>
  );
}
