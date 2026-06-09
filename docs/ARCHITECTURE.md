# Architecture

## Product Direction

This app is now a local macOS Webflow CMS manager, not just a paste cleaner.

Primary jobs:
- connect to one or more Webflow sites
- fetch collections and entries
- edit entries locally in one centralized UI
- save draft changes back to Webflow
- publish from the app with explicit confirmation
- use the existing formatter as a rich text helper when needed

## Local-first design

The app talks directly to Webflow from the desktop client.
No custom application server is required for v1.

That means:
- secrets stay on the Mac
- API calls run from the desktop app
- local cache improves responsiveness
- no shared backend or team-wide audit log in v1

## Core layers

- `src/core/domain`
  - normalized models for connections, collections, entries, and publish actions
- `src/core/providers/webflow`
  - Webflow-specific adapter and request orchestration
- `src/core/secrets`
  - Keychain-backed token storage abstraction
- `src/core/storage`
  - local cache abstraction for SQLite-backed records
- `src/core/sync`
  - sync and mutation workflows between provider and local cache
- `src/core/pipeline`
  - retained as a rich text cleanup helper for long-form fields

## Security model

- Secrets: macOS Keychain only
- Cache: SQLite for non-secret site metadata and draft data
- Logs: sanitize all auth values
- Publish: separate from save, explicit confirmation required
- Tokens: one token reference per site connection

## Suggested implementation order

1. Wire Tauri commands for Keychain access
2. Add SQLite-backed cache layer
3. Implement Webflow connection validation
4. Implement collection listing
5. Implement entry listing and field loading
6. Implement save draft update flow
7. Implement publish flow
8. Reuse formatter pipeline for rich text field cleanup
