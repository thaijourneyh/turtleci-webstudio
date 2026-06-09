import type { WebflowCollection } from '../../core/domain/webflow';

interface CollectionListProps {
  collections: WebflowCollection[];
  selectedCollectionId: string;
  isRefreshing: boolean;
  onSelectCollection: (id: string) => void;
  onRefresh: () => void;
}

export function CollectionList({
  collections,
  selectedCollectionId,
  isRefreshing,
  onSelectCollection,
  onRefresh,
}: CollectionListProps) {
  return (
    <section className="surface-card p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">Collections</p>
          <h2 className="mt-2 text-lg font-semibold text-slate-950">CMS collections</h2>
        </div>
        <button
          className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-stone-50 disabled:opacity-50"
          type="button"
          onClick={onRefresh}
          disabled={isRefreshing}
        >
          {isRefreshing ? 'Refreshing...' : 'Refresh collections'}
        </button>
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {collections.map((collection) => {
          const selected = selectedCollectionId === collection.id;

          return (
            <button
              key={collection.id}
              type="button"
              onClick={() => onSelectCollection(collection.id)}
              className={`rounded-2xl border p-4 text-left transition ${
                selected ? 'border-stone-900 bg-stone-900 text-white' : 'border-stone-200 bg-white hover:bg-stone-50'
              }`}
            >
              <div className={`font-semibold ${selected ? 'text-white' : 'text-slate-900'}`}>{collection.name}</div>
              <div className={`mt-1 text-sm ${selected ? 'text-stone-300' : 'text-slate-500'}`}>/{collection.slug}</div>
              <div className={`mt-3 text-sm ${selected ? 'text-stone-300' : 'text-slate-600'}`}>{collection.entries} entries</div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
