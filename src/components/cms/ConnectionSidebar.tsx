import type { WebflowConnection } from '../../core/domain/webflow';

interface ConnectionSidebarProps {
  connections: WebflowConnection[];
  selectedConnectionId: string;
  onSelectConnection: (id: string) => void;
}

export function ConnectionSidebar({ connections, selectedConnectionId, onSelectConnection }: ConnectionSidebarProps) {
  return (
    <section className="surface-card p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">Sites</p>
          <h2 className="mt-2 text-lg font-semibold text-slate-950">Connected Webflow sites</h2>
        </div>
        <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-slate-500">
          {connections.length} saved
        </span>
      </div>

      <div className="space-y-3">
        {connections.map((connection) => {
          const selected = selectedConnectionId === connection.id;

          return (
            <button
              key={connection.id}
              type="button"
              onClick={() => onSelectConnection(connection.id)}
              className={`w-full rounded-2xl border p-4 text-left transition ${
                selected
                  ? 'border-stone-900 bg-stone-900 text-white shadow-lg shadow-stone-900/10'
                  : 'border-stone-200 bg-white hover:border-stone-300 hover:bg-stone-50'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className={`font-semibold ${selected ? 'text-white' : 'text-slate-900'}`}>{connection.name}</div>
                  <div className={`mt-1 text-sm ${selected ? 'text-stone-300' : 'text-slate-500'}`}>{connection.workspaceLabel}</div>
                  <div className={`mt-2 text-xs ${selected ? 'text-stone-300' : 'text-slate-400'}`}>
                    Site {connection.siteId.slice(0, 8)}... · {connection.collections} collections
                  </div>
                </div>
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                    connection.status === 'connected'
                      ? selected
                        ? 'bg-emerald-400/20 text-emerald-100'
                        : 'bg-emerald-100 text-emerald-700'
                      : connection.status === 'attention'
                        ? selected
                          ? 'bg-amber-300/20 text-amber-100'
                          : 'bg-amber-100 text-amber-700'
                        : selected
                          ? 'bg-slate-200/20 text-slate-100'
                          : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  {connection.status}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
