import type { WebflowEntry } from '../../core/domain/webflow';

type EntrySort = 'updated' | 'status' | 'name';

interface EntryListProps {
  entries: WebflowEntry[];
  selectedEntryId: string;
  dirtyEntryIds: string[];
  query: string;
  sort: EntrySort;
  isLoading: boolean;
  onSelectEntry: (id: string) => void;
  onQueryChange: (value: string) => void;
  onSortChange: (value: EntrySort) => void;
  onRefresh: () => void;
}

export function EntryList({
  entries,
  selectedEntryId,
  dirtyEntryIds,
  query,
  sort,
  isLoading,
  onSelectEntry,
  onQueryChange,
  onSortChange,
  onRefresh,
}: EntryListProps) {
  return (
    <section className="surface-card p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">Entries</p>
          <h2 className="mt-2 text-lg font-semibold text-slate-950">Collection items</h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-slate-500">{entries.length} items</span>
          <button
            className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-stone-50 disabled:opacity-50"
            type="button"
            onClick={onRefresh}
            disabled={isLoading}
          >
            {isLoading ? 'Refreshing...' : 'Refresh items'}
          </button>
        </div>
      </div>

      <div className="mb-4 grid gap-3 md:grid-cols-[minmax(0,1fr)_180px]">
        <input
          className="field-shell"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Search entries"
        />
        <select className="field-shell" value={sort} onChange={(event) => onSortChange(event.target.value as EntrySort)}>
          <option value="updated">Last updated</option>
          <option value="status">Status</option>
          <option value="name">Name</option>
        </select>
      </div>

      {isLoading ? <div className="rounded-2xl bg-stone-100 px-4 py-3 text-sm text-slate-600">Loading collection items...</div> : null}
      {!isLoading && entries.length === 0 ? (
        <div className="rounded-2xl bg-stone-100 px-4 py-3 text-sm text-slate-600">No entries match this view yet.</div>
      ) : null}

      <div className="space-y-3">
        {entries.map((entry) => {
          const isDirty = dirtyEntryIds.includes(entry.id);
          const selected = selectedEntryId === entry.id;

          return (
            <button
              key={entry.id}
              type="button"
              onClick={() => onSelectEntry(entry.id)}
              className={`w-full rounded-2xl border p-4 text-left transition ${
                selected ? 'border-stone-900 bg-stone-900 text-white' : 'border-stone-200 bg-white hover:bg-stone-50'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className={`font-semibold ${selected ? 'text-white' : 'text-slate-900'}`}>{entry.name}</div>
                  <div className={`mt-2 text-sm ${selected ? 'text-stone-300' : 'text-slate-500'}`}>/{entry.slug}</div>
                </div>
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                    isDirty
                      ? selected
                        ? 'bg-blue-400/20 text-blue-100'
                        : 'bg-blue-100 text-blue-700'
                      : entry.status === 'published'
                        ? selected
                          ? 'bg-emerald-400/20 text-emerald-100'
                          : 'bg-emerald-100 text-emerald-700'
                        : entry.status === 'draft' || entry.status === 'queued'
                          ? selected
                            ? 'bg-amber-300/20 text-amber-100'
                            : 'bg-amber-100 text-amber-700'
                          : selected
                            ? 'bg-blue-400/20 text-blue-100'
                            : 'bg-blue-100 text-blue-700'
                  }`}
                >
                  {isDirty ? 'Unsynced' : entry.status}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
