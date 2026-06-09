import { useEffect, useMemo, useState } from 'react';
import { CollectionList } from './components/cms/CollectionList';
import { ConnectionForm, type ConnectionFormValues } from './components/cms/ConnectionForm';
import { ConnectionSidebar } from './components/cms/ConnectionSidebar';
import { EntryEditor } from './components/cms/EntryEditor';
import { EntryList } from './components/cms/EntryList';
import { WebflowConnectionService } from './core/live/webflowConnections';
import type { WebflowCollection, WebflowConnection, WebflowEntry } from './core/domain/webflow';
import { WebflowApiClient } from './core/providers/webflow/client';
import { MacKeychainSecretStore } from './core/secrets/keychain';
import { PersistentConnectionStore } from './core/storage/connectionStore';
import { BrowserMemoryStore } from './core/storage/database';
import { WebflowSyncService } from './core/sync/webflowSync';
import { mockCollections, mockConnections, mockEntries } from './data/mockWebflow';

const secretStore = new MacKeychainSecretStore();
const provider = new WebflowApiClient(secretStore);
const connectionService = new WebflowConnectionService(secretStore, provider);
const persistentConnectionStore = new PersistentConnectionStore();
const syncService = new WebflowSyncService(
  provider,
  new BrowserMemoryStore<WebflowCollection>(),
  new BrowserMemoryStore<WebflowEntry>(),
);
const mockConnectionIds = new Set(mockConnections.map((connection) => connection.id));
type EntrySort = 'updated' | 'status' | 'name';
type AppView = 'content' | 'settings';

function cloneEntry(entry: WebflowEntry): WebflowEntry {
  return {
    ...entry,
    fields: entry.fields.map((field) => ({ ...field })),
  };
}

function toEntrySnapshot(entriesToStore: WebflowEntry[]): Record<string, WebflowEntry> {
  return entriesToStore.reduce<Record<string, WebflowEntry>>((snapshot, entry) => {
    snapshot[entry.id] = cloneEntry(entry);
    return snapshot;
  }, {});
}

function byConnection<T extends { connectionId: string }>(items: T[], connectionId: string): T[] {
  return items.filter((item) => item.connectionId === connectionId);
}

function byCollection(items: WebflowEntry[], connectionId: string, collectionId: string): WebflowEntry[] {
  return items.filter((item) => item.connectionId === connectionId && item.collectionId === collectionId);
}

export default function App() {
  const [connections, setConnections] = useState<WebflowConnection[]>(mockConnections);
  const [collections, setCollections] = useState<WebflowCollection[]>(mockCollections);
  const [entries, setEntries] = useState<WebflowEntry[]>(mockEntries);
  const [savedEntries, setSavedEntries] = useState<Record<string, WebflowEntry>>(() => toEntrySnapshot(mockEntries));
  const [dirtyEntryIds, setDirtyEntryIds] = useState<string[]>([]);
  const [isSyncing, setIsSyncing] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isRefreshingCollections, setIsRefreshingCollections] = useState(false);
  const [isLoadingEntries, setIsLoadingEntries] = useState(false);
  const [connectionError, setConnectionError] = useState<string | null>(null);
  const [connectionSuccess, setConnectionSuccess] = useState<string | null>(null);
  const [entryError, setEntryError] = useState<string | null>(null);
  const [editorMessage, setEditorMessage] = useState<string | null>(null);
  const [entryQuery, setEntryQuery] = useState('');
  const [entrySort, setEntrySort] = useState<EntrySort>('updated');
  const [connectionResetSignal, setConnectionResetSignal] = useState(0);
  const [hasHydratedConnections, setHasHydratedConnections] = useState(false);
  const [activeView, setActiveView] = useState<AppView>('content');
  const [selectedConnectionId, setSelectedConnectionId] = useState<string>(mockConnections[0]?.id ?? '');
  const visibleCollections = useMemo<WebflowCollection[]>(
    () => byConnection(collections, selectedConnectionId),
    [collections, selectedConnectionId],
  );
  const [selectedCollectionId, setSelectedCollectionId] = useState<string>(
    visibleCollections[0]?.id ?? mockCollections[0]?.id ?? '',
  );
  const collectionEntries = useMemo<WebflowEntry[]>(
    () => byCollection(entries, selectedConnectionId, selectedCollectionId),
    [entries, selectedCollectionId, selectedConnectionId],
  );
  const visibleEntries = useMemo<WebflowEntry[]>(() => {
    const normalizedQuery = entryQuery.trim().toLowerCase();
    const filtered = collectionEntries.filter((entry) => {
      if (!normalizedQuery) {
        return true;
      }

      return [entry.name, entry.slug, ...entry.fields.map((field) => String(field.value))]
        .join(' ')
        .toLowerCase()
        .includes(normalizedQuery);
    });

    return [...filtered].sort((left, right) => {
      if (entrySort === 'name') {
        return left.name.localeCompare(right.name);
      }
      if (entrySort === 'status') {
        return left.status.localeCompare(right.status) || right.updatedAt.localeCompare(left.updatedAt);
      }
      return right.updatedAt.localeCompare(left.updatedAt);
    });
  }, [collectionEntries, entryQuery, entrySort]);
  const [selectedEntryId, setSelectedEntryId] = useState<string>(visibleEntries[0]?.id ?? mockEntries[0]?.id ?? '');

  const selectedConnection = useMemo<WebflowConnection | undefined>(
    () => connections.find((connection) => connection.id === selectedConnectionId),
    [connections, selectedConnectionId],
  );

  const selectedEntry = useMemo<WebflowEntry | undefined>(
    () => visibleEntries.find((entry) => entry.id === selectedEntryId) ?? visibleEntries[0],
    [selectedEntryId, visibleEntries],
  );

  const selectedCollection = useMemo<WebflowCollection | undefined>(
    () => visibleCollections.find((collection) => collection.id === selectedCollectionId) ?? visibleCollections[0],
    [selectedCollectionId, visibleCollections],
  );

  const isLiveConnection = selectedConnection ? !mockConnectionIds.has(selectedConnection.id) : false;
  const hasUnsyncedChanges = dirtyEntryIds.length > 0;

  useEffect(() => {
    async function hydrateConnections() {
      try {
        const savedConnections = await persistentConnectionStore.load();
        if (savedConnections.length > 0) {
          setConnections(savedConnections);
          setCollections([]);
          setEntries([]);
          setSavedEntries({});
          setDirtyEntryIds([]);
          setSelectedConnectionId(savedConnections[0]?.id ?? '');
          setSelectedCollectionId('');
          setSelectedEntryId('');
          setEntryQuery('');
          setConnectionSuccess(
            `Loaded ${savedConnections.length} saved Webflow connection${savedConnections.length === 1 ? '' : 's'}.`,
          );
        }
      } catch (error) {
        setConnectionError(error instanceof Error ? error.message : 'Unable to load saved connections.');
      } finally {
        setHasHydratedConnections(true);
      }
    }

    void hydrateConnections();
  }, []);

  useEffect(() => {
    if (!hasHydratedConnections) {
      return;
    }

    const liveConnections = connections.filter((connection) => !mockConnectionIds.has(connection.id));
    if (!liveConnections.length) {
      return;
    }

    void persistentConnectionStore.save(liveConnections);
  }, [connections, hasHydratedConnections]);

  useEffect(() => {
    function handleBeforeUnload(event: BeforeUnloadEvent) {
      if (!hasUnsyncedChanges) {
        return;
      }

      event.preventDefault();
      event.returnValue = '';
    }

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [hasUnsyncedChanges]);

  useEffect(() => {
    async function loadCollectionsForConnection() {
      if (!selectedConnection || !isLiveConnection || visibleCollections.length > 0 || isRefreshingCollections) {
        return;
      }

      setIsRefreshingCollections(true);
      setConnectionError(null);

      try {
        const nextCollections = await syncService.syncCollections(selectedConnection);
        setCollections((current) => {
          const withoutConnection = current.filter((collection) => collection.connectionId !== selectedConnection.id);
          return [...withoutConnection, ...nextCollections];
        });
        setConnections((current) =>
          current.map((connection) =>
            connection.id === selectedConnection.id
              ? { ...connection, collections: nextCollections.length, lastSyncedAt: new Date().toISOString() }
              : connection,
          ),
        );
      } catch (error) {
        setConnectionError(error instanceof Error ? error.message : 'Unable to load collections from Webflow.');
      } finally {
        setIsRefreshingCollections(false);
      }
    }

    void loadCollectionsForConnection();
  }, [isLiveConnection, isRefreshingCollections, selectedConnection, visibleCollections.length]);

  useEffect(() => {
    if (!visibleCollections.length) {
      if (selectedCollectionId) {
        setSelectedCollectionId('');
      }
      return;
    }

    const stillVisible = visibleCollections.some((collection) => collection.id === selectedCollectionId);
    if (!stillVisible) {
      setSelectedCollectionId(visibleCollections[0].id);
    }
  }, [selectedCollectionId, visibleCollections]);

  useEffect(() => {
    if (!visibleEntries.length) {
      if (selectedEntryId) {
        setSelectedEntryId('');
      }
      return;
    }

    const stillVisible = visibleEntries.some((entry) => entry.id === selectedEntryId);
    if (!stillVisible) {
      setSelectedEntryId(visibleEntries[0].id);
    }
  }, [selectedEntryId, visibleEntries]);

  useEffect(() => {
    async function loadEntries() {
      if (!selectedConnection || !selectedCollection || !isLiveConnection) {
        return;
      }

      const alreadyLoaded = entries.some(
        (entry) => entry.connectionId === selectedConnection.id && entry.collectionId === selectedCollection.id,
      );
      if (alreadyLoaded) {
        return;
      }

      setIsLoadingEntries(true);
      setEntryError(null);

      try {
        const collectionDetails = await syncService.syncCollectionDetails(selectedConnection, selectedCollection.id);
        setCollections((current) =>
          current.map((collection) => (collection.id === collectionDetails.id ? { ...collection, ...collectionDetails } : collection)),
        );
        const nextEntries = await syncService.syncEntries(selectedConnection, selectedCollection.id);
        setEntries((current) => {
          const withoutCollection = current.filter(
            (entry) =>
              !(entry.connectionId === selectedConnection.id && entry.collectionId === selectedCollection.id),
          );
          return [...withoutCollection, ...nextEntries];
        });
        setSavedEntries((current) => ({ ...current, ...toEntrySnapshot(nextEntries) }));
        setCollections((current) =>
          current.map((collection) =>
            collection.id === selectedCollection.id ? { ...collection, entries: nextEntries.length } : collection,
          ),
        );
      } catch (error) {
        setEntryError(error instanceof Error ? error.message : 'Unable to load entries from Webflow.');
      } finally {
        setIsLoadingEntries(false);
      }
    }

    void loadEntries();
  }, [entries, isLiveConnection, selectedCollection, selectedConnection]);

  function confirmNavigation(): boolean {
    if (!hasUnsyncedChanges) {
      return true;
    }

    return window.confirm('You have unsynced changes. Leave this view and discard them?');
  }

  function discardUnsyncedChanges() {
    setEntries((current) =>
      current.map((entry) => {
        if (!dirtyEntryIds.includes(entry.id)) {
          return entry;
        }

        return savedEntries[entry.id] ? cloneEntry(savedEntries[entry.id]) : entry;
      }),
    );
    setDirtyEntryIds([]);
    setEditorMessage(null);
    setEntryError(null);
  }

  function handleSelectConnection(connectionId: string) {
    if (connectionId === selectedConnectionId) {
      return;
    }
    if (!confirmNavigation()) {
      return;
    }

    discardUnsyncedChanges();
    setSelectedConnectionId(connectionId);
    setConnectionSuccess(null);
    setEntryError(null);
    setEditorMessage(null);
  }

  function handleSelectCollection(collectionId: string) {
    if (collectionId === selectedCollectionId) {
      return;
    }
    if (!confirmNavigation()) {
      return;
    }

    discardUnsyncedChanges();
    setSelectedCollectionId(collectionId);
    setConnectionSuccess(null);
    setEntryError(null);
    setEditorMessage(null);
  }

  function handleSelectEntry(entryId: string) {
    if (entryId === selectedEntryId) {
      return;
    }
    if (!confirmNavigation()) {
      return;
    }

    discardUnsyncedChanges();
    setSelectedEntryId(entryId);
    setConnectionSuccess(null);
  }

  function markDirty(entryId: string) {
    setDirtyEntryIds((current) => (current.includes(entryId) ? current : [...current, entryId]));
  }

  function clearDirty(entryId: string) {
    setDirtyEntryIds((current) => current.filter((id) => id !== entryId));
  }

  function updateField(fieldId: string, value: unknown) {
    if (!selectedEntry) {
      return;
    }

    setEntries((current) =>
      current.map((entry) =>
        entry.id === selectedEntry.id
          ? {
              ...entry,
              fields: entry.fields.map((field) => (field.id === fieldId ? { ...field, value } : field)),
            }
          : entry,
      ),
    );
    markDirty(selectedEntry.id);
    setEditorMessage(null);
  }

  async function saveDraftToWebflow() {
    if (!selectedEntry || !selectedConnection) {
      return;
    }

    setIsSyncing(true);
    setEditorMessage(null);
    setEntryError(null);

    try {
      if (isLiveConnection) {
        const updated = await syncService.saveEntry(selectedConnection, selectedEntry);
        setEntries((current) => current.map((entry) => (entry.id === updated.id ? updated : entry)));
        setSavedEntries((current) => ({ ...current, [updated.id]: cloneEntry(updated) }));
      } else {
        const updatedAt = new Date().toISOString();
        setEntries((current) =>
          current.map((entry) =>
            entry.id === selectedEntry.id
              ? {
                  ...entry,
                  status: 'changed',
                  updatedAt,
                }
              : entry,
          ),
        );
        setSavedEntries((current) => ({
          ...current,
          [selectedEntry.id]: cloneEntry({
            ...selectedEntry,
            status: 'changed',
            updatedAt,
          }),
        }));
      }

      setConnections((current) =>
        current.map((connection) =>
          connection.id === selectedConnection.id ? { ...connection, lastSyncedAt: new Date().toISOString() } : connection,
        ),
      );
      clearDirty(selectedEntry.id);
      setEditorMessage('Draft synced to Webflow.');
    } catch (error) {
      setEntryError(error instanceof Error ? error.message : 'Unable to save the draft to Webflow.');
    } finally {
      setIsSyncing(false);
    }
  }

  async function publishNow() {
    if (!selectedEntry || !selectedConnection) {
      return;
    }

    setIsSyncing(true);
    setEditorMessage(null);
    setEntryError(null);

    try {
      if (isLiveConnection) {
        await syncService.publishEntry(selectedConnection, selectedEntry.id, selectedEntry.collectionId);
      }

      setEntries((current) =>
        current.map((entry) =>
          entry.id === selectedEntry.id
            ? {
                ...entry,
                status: 'published',
                updatedAt: new Date().toISOString(),
              }
            : entry,
        ),
      );
      setSavedEntries((current) => ({
        ...current,
        [selectedEntry.id]: cloneEntry({
          ...(current[selectedEntry.id] ?? selectedEntry),
          status: 'published',
          updatedAt: new Date().toISOString(),
        }),
      }));
      setConnections((current) =>
        current.map((connection) =>
          connection.id === selectedConnection.id ? { ...connection, lastSyncedAt: new Date().toISOString() } : connection,
        ),
      );
      clearDirty(selectedEntry.id);
      setEditorMessage('Publish request sent to Webflow.');
    } catch (error) {
      setEntryError(error instanceof Error ? error.message : 'Unable to publish to Webflow.');
    } finally {
      setIsSyncing(false);
    }
  }

  function queuePublish() {
    setEditorMessage('Queued publish is not wired yet. For now, save the draft and use Publish now when you are ready.');
  }

  async function refreshCollections() {
    if (!selectedConnection) {
      return;
    }
    if (!confirmNavigation()) {
      return;
    }

    discardUnsyncedChanges();
    setIsRefreshingCollections(true);
    setConnectionError(null);
    setConnectionSuccess(null);
    setEditorMessage(null);

    try {
      if (isLiveConnection) {
        const nextCollections = await syncService.syncCollections(selectedConnection);
        setCollections((current) => {
          const withoutConnection = current.filter((collection) => collection.connectionId !== selectedConnection.id);
          return [...withoutConnection, ...nextCollections];
        });
        setConnections((current) =>
          current.map((connection) =>
            connection.id === selectedConnection.id
              ? { ...connection, collections: nextCollections.length, lastSyncedAt: new Date().toISOString() }
              : connection,
          ),
        );
        setConnectionSuccess(`Connected successfully. Loaded ${nextCollections.length} collections for ${selectedConnection.name}.`);
        setEditorMessage(`Refreshed ${nextCollections.length} collections from Webflow.`);
      } else {
        setEditorMessage('Mock collections refreshed.');
      }
    } catch (error) {
      setConnectionError(error instanceof Error ? error.message : 'Unable to refresh collections from Webflow.');
    } finally {
      setIsRefreshingCollections(false);
    }
  }

  async function refreshEntries() {
    if (!selectedConnection || !selectedCollection) {
      return;
    }
    if (!confirmNavigation()) {
      return;
    }

    discardUnsyncedChanges();
    setIsLoadingEntries(true);
    setEntryError(null);
    setEditorMessage(null);

    try {
      if (isLiveConnection) {
        const nextEntries = await syncService.syncEntries(selectedConnection, selectedCollection.id);
        const collectionDetails = await syncService.syncCollectionDetails(selectedConnection, selectedCollection.id);
        setEntries((current) => {
          const withoutCollection = current.filter(
            (entry) =>
              !(entry.connectionId === selectedConnection.id && entry.collectionId === selectedCollection.id),
          );
          return [...withoutCollection, ...nextEntries];
        });
        setSavedEntries((current) => ({ ...current, ...toEntrySnapshot(nextEntries) }));
        setCollections((current) =>
          current.map((collection) =>
            collection.id === selectedCollection.id
              ? { ...collection, ...collectionDetails, entries: nextEntries.length }
              : collection,
          ),
        );
        setEditorMessage(`Refreshed ${nextEntries.length} entries from Webflow.`);
      } else {
        setEditorMessage('Mock entries refreshed.');
      }
    } catch (error) {
      setEntryError(error instanceof Error ? error.message : 'Unable to refresh entries from Webflow.');
    } finally {
      setIsLoadingEntries(false);
    }
  }

  function revertEntryChanges() {
    if (!selectedEntry) {
      return;
    }

    const savedEntry = savedEntries[selectedEntry.id];
    if (!savedEntry) {
      return;
    }

    setEntries((current) => current.map((entry) => (entry.id === selectedEntry.id ? cloneEntry(savedEntry) : entry)));
    clearDirty(selectedEntry.id);
    setEditorMessage('Reverted to the last synced version.');
    setEntryError(null);
  }

  async function handleConnect(values: ConnectionFormValues) {
    setIsConnecting(true);
    setConnectionError(null);
    setConnectionSuccess(null);

    try {
      const result = await connectionService.createAndValidateConnection(values);
      setConnections((current) => {
        const next = [...current.filter((connection) => connection.id !== result.connection.id), result.connection];
        return next;
      });
      setCollections((current) => {
        const withoutCurrentConnection = current.filter((collection) => collection.connectionId !== result.connection.id);
        return [...withoutCurrentConnection, ...result.collections];
      });
      setSelectedConnectionId(result.connection.id);
      setSelectedCollectionId(result.collections[0]?.id ?? '');
      setSelectedEntryId('');
      setEntryQuery('');
      setConnectionResetSignal((current) => current + 1);
      setConnectionSuccess(`Connected successfully. Found ${result.collections.length} collections in ${result.connection.name}.`);
      setEditorMessage(`Connected to ${result.connection.name}. Select a collection to load live items.`);
    } catch (error) {
      setConnectionError(error instanceof Error ? error.message : 'Unable to connect to Webflow.');
    } finally {
      setIsConnecting(false);
    }
  }

  return (
    <main className="min-h-screen p-6 md:p-8">
      <div className="mx-auto max-w-[1600px]">
        <header className="mb-6 flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">Local macOS control center</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">Webflow CMS Manager</h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
              Centralize multi-site Webflow editing in one grounded desktop workspace. Browse collections, edit content,
              and publish from a cleaner interface built for your marketing team.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start rounded-full border border-stone-200 bg-white/80 p-1 shadow-sm">
            <button
              type="button"
              onClick={() => setActiveView('content')}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeView === 'content' ? 'bg-stone-900 text-white' : 'text-slate-600 hover:bg-stone-100'
              }`}
            >
              Content
            </button>
            <button
              type="button"
              onClick={() => setActiveView('settings')}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeView === 'settings' ? 'bg-stone-900 text-white' : 'text-slate-600 hover:bg-stone-100'
              }`}
            >
              Settings
            </button>
          </div>
        </header>

        {activeView === 'settings' ? (
          <section className="grid gap-6 xl:grid-cols-[minmax(0,1.2fr)_380px]">
            <ConnectionForm
              isSaving={isConnecting}
              errorMessage={connectionError}
              successMessage={connectionSuccess}
              resetSignal={connectionResetSignal}
              onSubmit={handleConnect}
            />
            <ConnectionSidebar
              connections={connections}
              selectedConnectionId={selectedConnectionId}
              onSelectConnection={handleSelectConnection}
            />
          </section>
        ) : (
          <section className="grid gap-6 xl:grid-cols-[300px_minmax(0,1fr)]">
            <div className="space-y-6">
              <ConnectionSidebar
                connections={connections}
                selectedConnectionId={selectedConnectionId}
                onSelectConnection={handleSelectConnection}
              />
              <section className="surface-card p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">Overview</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                  {selectedConnection?.name ?? 'No site selected'}
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {selectedConnection?.workspaceLabel ?? 'No workspace selected'} · {selectedConnection?.collections ?? 0}{' '}
                  collections · last sync {selectedConnection ? new Date(selectedConnection.lastSyncedAt).toLocaleString() : 'unknown'}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-stone-900 px-3 py-1.5 text-xs font-semibold text-white">
                    {selectedConnection?.status ?? 'offline'}
                  </span>
                  <span className="rounded-full bg-stone-100 px-3 py-1.5 text-xs font-medium text-slate-600">
                    {selectedCollection?.entries ?? 0} items in view
                  </span>
                </div>
                {connectionSuccess ? (
                  <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                    {connectionSuccess}
                  </div>
                ) : null}
                {connectionError ? (
                  <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {connectionError}
                  </div>
                ) : null}
              </section>
            </div>

            <div className="space-y-6">
              <CollectionList
                collections={visibleCollections}
                selectedCollectionId={selectedCollection?.id ?? ''}
                isRefreshing={isRefreshingCollections}
                onSelectCollection={handleSelectCollection}
                onRefresh={refreshCollections}
              />

              <div className="grid gap-6 2xl:grid-cols-[360px_minmax(0,1fr)]">
                <div className="space-y-4">
                  {entryError && !selectedEntry ? (
                    <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{entryError}</div>
                  ) : null}
                  <EntryList
                    entries={visibleEntries}
                    selectedEntryId={selectedEntry?.id ?? ''}
                    dirtyEntryIds={dirtyEntryIds}
                    query={entryQuery}
                    sort={entrySort}
                    isLoading={isLoadingEntries}
                    onSelectEntry={handleSelectEntry}
                    onQueryChange={setEntryQuery}
                    onSortChange={setEntrySort}
                    onRefresh={refreshEntries}
                  />
                </div>

                <EntryEditor
                  entry={selectedEntry}
                  isDirty={selectedEntry ? dirtyEntryIds.includes(selectedEntry.id) : false}
                  isSyncing={isSyncing}
                  feedbackMessage={editorMessage}
                  errorMessage={selectedEntry ? entryError : null}
                  supportsQueuePublish={!isLiveConnection}
                  onFieldChange={updateField}
                  onRevertChanges={revertEntryChanges}
                  onSaveDraft={saveDraftToWebflow}
                  onQueuePublish={queuePublish}
                  onPublishNow={publishNow}
                />
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
