# Security Notes

## Recommended storage rules

- Store Webflow API tokens in macOS Keychain
- Store only token references in local app data
- Do not write tokens into `.env`, JSON files, SQLite, or logs

## Current implementation

- Tauri commands now handle `save`, `read`, and `delete` operations through the macOS `security` CLI
- The TypeScript secret-store wrapper calls those commands through Tauri `invoke`
- The current wrapper is ready for app-level connection flows, but the UI for entering and rotating tokens still needs to be built

## Local cache contents

Safe to cache locally:
- site ids
- collection ids
- entry metadata
- local draft snapshots
- sync timestamps

Avoid caching unless necessary:
- raw secrets
- full request traces with headers
- sensitive editorial notes that do not need offline support

## Publish safeguards

- Show site and collection context clearly before publish
- Keep `Save draft` and `Publish` as separate actions
- Require confirmation before publish
- Record a local activity event for save/publish actions

## Future hardening

- Add biometric or passcode gate before revealing connection settings
- Add token rotation reminders
- Add per-site permission summaries in the UI
