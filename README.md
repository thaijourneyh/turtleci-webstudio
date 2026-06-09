# Webflow CMS Manager

Local macOS desktop app for managing multiple Webflow sites from one place.

## Product direction

This project has moved from a paste-only Webflow formatter toward a centralized local CMS editor.

Primary goals:
- connect multiple Webflow sites from one Mac app
- fetch collections and entries for each site
- edit entries locally in one centralized UI
- save changes and publish from the app
- keep the rich text formatter as a helper module for long-form content fields

## Why local-first still works

A server is not required for v1.
The desktop app can talk directly to Webflow APIs.

That is a good fit when:
- the app is internal-only
- the team runs on macOS
- each machine can maintain its own Webflow credentials
- centralized approvals and audit trails are not yet required

## Security approach

Recommended storage split:
- Webflow API tokens: macOS Keychain only
- Cached CMS data: SQLite
- Token references, sync state, and local drafts: local app storage

Do not store secrets in:
- `.env`
- JSON files
- SQLite
- logs

## Current scaffold

```text
marketing-webflow-cleaner/
  src/
    components/cms/       Webflow manager UI
    core/domain/          normalized app models
    core/providers/       provider adapters
    core/secrets/         Keychain abstraction
    core/storage/         local cache abstraction
    core/sync/            sync/save/publish workflows
    core/pipeline/        rich text cleanup helper
    data/                 mock Webflow data for UI scaffolding
    test/                 unit tests for the formatter pipeline
  src-tauri/              macOS desktop shell
  docs/                   architecture and security notes
```

## Current status

Implemented now:
- local Tauri shell and React UI
- centralized dashboard scaffold for Webflow sites, collections, and entries
- security architecture notes and local-first design
- macOS Keychain commands for secure token save/read/delete
- provider, secrets, cache, and sync interfaces
- formatter pipeline retained as a rich text helper
- unit tests for formatting rules

Still to wire for production:
- real Webflow API adapter
- SQLite-backed local cache
- save draft flow
- publish flow with confirmation and activity logging

## Run locally

```bash
cd /Users/thaitran/Downloads/JH\ Codex/marketing-webflow-cleaner
npm install
npm run test
npm run build
npm run tauri dev
```

## Docs

- [Architecture](./docs/ARCHITECTURE.md)
- [Security](./docs/SECURITY.md)
