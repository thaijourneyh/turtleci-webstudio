# TurtleCI Webstudio Migration Workflow

Use Webstudio for visual editing, then run the sync command after copying more
from Webflow.

## Editor

- Builder URL: `https://p-a99d5fa7-683f-4129-974a-e8564180e8df.wstd.dev:5173/`
- Login secret: `0000`
- Local editor state: `.webstudio-home/`

Important: the local builder must use a persistent home directory. If it runs
with `WEBSTUDIO_HOME` pointing at `/private/tmp`, project edits can disappear on
restart or after the OS clears temp files.

## Import From Exported Webflow Code

When the source of truth is the exported Webflow site in
`/Users/thaitran/Downloads/TurtleCI Webflow`, run:

```sh
npm run turtleci:webstudio:import
```

This command:

1. Reads the exported TurtleCI Webflow HTML pages.
2. Imports them into the local Webstudio project as editable pages.
3. Copies `images/`, `documents/`, and `js/` into the builder and staging app.
4. Restores Webflow class names on imported elements.
5. Regenerates and rebuilds the staging app.

## After Copying From Webflow

Run this from the workspace root:

```sh
npm run turtleci:webstudio:sync
```

This command:

1. Copies TurtleCI assets into the Webstudio builder and staging app.
2. Restores Webflow class names onto Webstudio instances.
3. Exports the local Webstudio project data into `turtleci-webstudio-staging`.
4. Regenerates the Webstudio staging app.
5. Builds the static staging output in `turtleci-webstudio-staging/dist/client`.

The important styling step is number 2. Webflow global CSS depends on class
selectors such as `.container-lg`, `.pricing_list`, `.swiper-slide`, and
`.text-style-3lines`. Webstudio may preserve the style source names internally
without rendering those names as DOM classes. The sync command turns those style
source names back into actual `class` props so copied Webflow CSS can match.
