import { useEffect, useState, type FormEvent, type ReactNode } from 'react';

export interface ConnectionFormValues {
  name: string;
  siteId: string;
  workspaceLabel: string;
  token: string;
}

interface ConnectionFormProps {
  isSaving: boolean;
  errorMessage: string | null;
  successMessage: string | null;
  resetSignal: number;
  onSubmit: (values: ConnectionFormValues) => void;
}

const initialState: ConnectionFormValues = {
  name: '',
  siteId: '',
  workspaceLabel: '',
  token: '',
};

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      {children}
    </label>
  );
}

export function ConnectionForm({ isSaving, errorMessage, successMessage, resetSignal, onSubmit }: ConnectionFormProps) {
  const [values, setValues] = useState<ConnectionFormValues>(initialState);

  useEffect(() => {
    setValues(initialState);
  }, [resetSignal]);

  function updateValue<Key extends keyof ConnectionFormValues>(key: Key, value: ConnectionFormValues[Key]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit(values);
  }

  return (
    <section className="surface-card p-6">
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">Settings</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">Connect a Webflow site</h2>
        <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
          Tokens stay in macOS Keychain. The app stores only the connection record and token reference locally.
        </p>
      </div>

      <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
        <Field label="Site name">
          <input
            className="field-shell"
            value={values.name}
            onChange={(event) => updateValue('name', event.target.value)}
            placeholder="Journeyhorizon"
          />
        </Field>

        <Field label="Workspace label">
          <input
            className="field-shell"
            value={values.workspaceLabel}
            onChange={(event) => updateValue('workspaceLabel', event.target.value)}
            placeholder="Marketing team"
          />
        </Field>

        <Field label="Webflow site ID">
          <input
            className="field-shell"
            value={values.siteId}
            onChange={(event) => updateValue('siteId', event.target.value)}
            placeholder="67564d33..."
          />
        </Field>

        <Field label="Webflow API token">
          <input
            type="password"
            className="field-shell"
            value={values.token}
            onChange={(event) => updateValue('token', event.target.value)}
            placeholder="Paste token locally"
          />
        </Field>

        <div className="md:col-span-2 space-y-3">
          {errorMessage ? <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{errorMessage}</div> : null}
          {successMessage ? (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
              {successMessage}
            </div>
          ) : null}
        </div>

        <div className="md:col-span-2 flex items-center justify-between gap-4 pt-2">
          <p className="max-w-2xl text-sm leading-6 text-slate-500">
            After validation, switch back to the Content tab to browse collections, edit entries, and publish updates.
          </p>
          <button
            className="rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-stone-900/10 transition hover:bg-stone-800 disabled:cursor-not-allowed disabled:opacity-50"
            type="submit"
            disabled={isSaving}
          >
            {isSaving ? 'Validating...' : 'Save and validate'}
          </button>
        </div>
      </form>
    </section>
  );
}
