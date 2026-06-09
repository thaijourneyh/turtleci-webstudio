import type { WebflowEntry } from '../../core/domain/webflow';
import { FieldEditor } from './FieldEditor';

interface EntryEditorProps {
  entry: WebflowEntry | undefined;
  isDirty: boolean;
  isSyncing: boolean;
  feedbackMessage: string | null;
  errorMessage: string | null;
  supportsQueuePublish: boolean;
  onFieldChange: (fieldId: string, value: unknown) => void;
  onRevertChanges: () => void;
  onSaveDraft: () => void;
  onQueuePublish: () => void;
  onPublishNow: () => void;
}

export function EntryEditor({
  entry,
  isDirty,
  isSyncing,
  feedbackMessage,
  errorMessage,
  supportsQueuePublish,
  onFieldChange,
  onRevertChanges,
  onSaveDraft,
  onQueuePublish,
  onPublishNow,
}: EntryEditorProps) {
  if (!entry) {
    return (
      <section className="surface-card flex min-h-[420px] items-center justify-center p-8">
        <div className="max-w-md text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">Editor</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">Pick an item to start editing</h2>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            Select a collection item to inspect its fields, edit rich text, sync the draft, and publish to Webflow.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="surface-card p-6">
      <div className="mb-6 flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">Editor</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">{entry.name}</h2>
          <p className="mt-2 text-sm text-slate-500">Last synced with Webflow {new Date(entry.updatedAt).toLocaleString()}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
              isDirty
                ? 'bg-blue-100 text-blue-700'
                : entry.status === 'published'
                  ? 'bg-emerald-100 text-emerald-700'
                  : entry.status === 'draft' || entry.status === 'queued'
                    ? 'bg-amber-100 text-amber-700'
                    : 'bg-blue-100 text-blue-700'
            }`}
          >
            {isDirty ? 'Unsynced changes' : entry.status}
          </span>
          <button
            className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-stone-50 disabled:opacity-50"
            type="button"
            disabled={!isDirty || isSyncing}
            onClick={onRevertChanges}
          >
            Revert
          </button>
          <button
            className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-stone-50 disabled:opacity-50"
            type="button"
            disabled={!isDirty || isSyncing}
            onClick={onSaveDraft}
          >
            Save draft
          </button>
          <button
            className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-stone-50 disabled:opacity-50"
            type="button"
            disabled={isDirty || isSyncing || !supportsQueuePublish}
            onClick={onQueuePublish}
          >
            Queue publish
          </button>
          <button
            className="rounded-full bg-stone-900 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-stone-900/10 transition hover:bg-stone-800 disabled:opacity-50"
            type="button"
            disabled={isDirty || isSyncing}
            onClick={onPublishNow}
          >
            Publish now
          </button>
        </div>
      </div>

      <p className="mb-5 max-w-3xl text-sm leading-6 text-slate-500">
        This editor syncs directly to Webflow. Save the draft after edits, then publish when the item is ready to go live.
      </p>

      {feedbackMessage ? (
        <div className="mb-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          {feedbackMessage}
        </div>
      ) : null}
      {errorMessage ? (
        <div className="mb-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{errorMessage}</div>
      ) : null}

      <div className="space-y-4">
        {entry.fields.map((field) => (
          <div key={field.id} className="rounded-3xl border border-stone-200 bg-white/80 p-5 shadow-sm">
            <FieldEditor field={field} onChange={onFieldChange} />
          </div>
        ))}
      </div>
    </section>
  );
}
