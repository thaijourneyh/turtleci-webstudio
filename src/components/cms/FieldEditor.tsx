import type { WebflowEntryField } from '../../core/domain/webflow';
import { RichTextEditor } from './RichTextEditor';

interface FieldEditorProps {
  field: WebflowEntryField;
  onChange: (fieldId: string, value: unknown) => void;
}

function normalizeDateValue(value: unknown): string {
  if (typeof value !== 'string' || !value) {
    return '';
  }

  const directMatch = value.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/);
  if (directMatch) {
    return directMatch[0];
  }

  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return value;
  }

  return `${parsed.getFullYear()}-${String(parsed.getMonth() + 1).padStart(2, '0')}-${String(parsed.getDate()).padStart(2, '0')}T${String(parsed.getHours()).padStart(2, '0')}:${String(parsed.getMinutes()).padStart(2, '0')}`;
}

function asText(value: unknown): string {
  if (value == null) {
    return '';
  }
  if (typeof value === 'string') {
    return value;
  }
  if (typeof value === 'number' || typeof value === 'boolean') {
    return String(value);
  }
  return JSON.stringify(value, null, 2);
}

function describeStructuredValue(kind: WebflowEntryField['kind'], value: unknown): { title: string; detail: string } {
  if (!value || typeof value !== 'object') {
    return {
      title: `No ${kind} linked`,
      detail: kind === 'image' ? 'This image field is empty.' : 'This linked field is empty.',
    };
  }

  const record = value as Record<string, unknown>;
  return {
    title: String(record.fileName ?? record.displayName ?? record.name ?? record.url ?? record.id ?? `${kind} value`),
    detail: Object.entries(record)
      .slice(0, 3)
      .map(([key, item]) => `${key}: ${String(item)}`)
      .join(' · '),
  };
}

function inputTypeFor(kind: WebflowEntryField['kind']): string {
  switch (kind) {
    case 'email':
      return 'email';
    case 'phone':
      return 'tel';
    case 'link':
      return 'url';
    case 'number':
      return 'number';
    default:
      return 'text';
  }
}

export function FieldEditor({ field, onChange }: FieldEditorProps) {
  const label = (
    <div className="mb-2 flex items-center gap-2">
      <label className="text-sm font-medium text-slate-700">{field.label}</label>
      {field.isRequired ? <span className="text-xs font-semibold text-amber-700">Required</span> : null}
    </div>
  );

  if (typeof field.value === 'boolean' || field.kind === 'toggle') {
    const isEnabled = Boolean(field.value);

    return (
      <div>
        {label}
        <button
          type="button"
          onClick={() => onChange(field.id, !isEnabled)}
          className={`inline-flex rounded-full px-4 py-2 text-sm font-medium transition ${
            isEnabled ? 'bg-emerald-100 text-emerald-800' : 'bg-stone-200 text-stone-700'
          }`}
        >
          {isEnabled ? 'Enabled' : 'Disabled'}
        </button>
      </div>
    );
  }

  if (field.kind === 'rich-text') {
    return <RichTextEditor label={field.label} value={asText(field.value)} onChange={(value) => onChange(field.id, value)} />;
  }

  if (field.kind === 'long-text') {
    return (
      <div>
        {label}
        <textarea
          className="field-shell min-h-[140px] resize-y"
          rows={5}
          value={asText(field.value)}
          onChange={(event) => onChange(field.id, event.target.value)}
        />
        {field.helpText ? <p className="mt-2 text-sm text-slate-500">{field.helpText}</p> : null}
      </div>
    );
  }

  if (field.kind === 'date') {
    return (
      <div>
        {label}
        <input
          type="datetime-local"
          className="field-shell"
          value={normalizeDateValue(field.value)}
          onChange={(event) => onChange(field.id, event.target.value)}
        />
        {field.helpText ? <p className="mt-2 text-sm text-slate-500">{field.helpText}</p> : null}
      </div>
    );
  }

  if (field.kind === 'image' || field.kind === 'reference' || field.kind === 'file') {
    const description = describeStructuredValue(field.kind, field.value);

    return (
      <div>
        {label}
        <div className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-4">
          <div className="font-medium text-slate-900">{description.title}</div>
          {description.detail ? <p className="mt-2 text-sm text-slate-500">{description.detail}</p> : null}
          <p className="mt-3 text-sm text-slate-500">
            {field.kind === 'image'
              ? 'Image replacement will be added in the next asset-management pass.'
              : field.kind === 'reference'
                ? 'Reference editing will be added in a later pass.'
                : 'File replacement will be added in a later pass.'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {label}
      <input
        type={inputTypeFor(field.kind)}
        className="field-shell"
        value={asText(field.value)}
        onChange={(event) =>
          onChange(field.id, field.kind === 'number' ? Number(event.target.value || 0) : event.target.value)
        }
      />
      {field.helpText ? <p className="mt-2 text-sm text-slate-500">{field.helpText}</p> : null}
    </div>
  );
}
