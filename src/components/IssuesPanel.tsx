import type { Issue } from '../core/types';

interface IssuesPanelProps {
  issues: Issue[];
}

export function IssuesPanel({ issues }: IssuesPanelProps) {
  return (
    <section className="panel stack-md">
      <div className="section-heading compact">
        <div>
          <p className="eyebrow">Linting</p>
          <h2>Issues and warnings</h2>
        </div>
        <span className="pill">{issues.length} checks</span>
      </div>

      {issues.length === 0 ? (
        <div className="empty-state success">No issues detected in the current output.</div>
      ) : (
        <ul className="issues-list">
          {issues.map((issue, index) => (
            <li key={`${issue.code}-${index}`} className={`issue-item ${issue.severity}`}>
              <span className="issue-severity">{issue.severity}</span>
              <p>{issue.message}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
