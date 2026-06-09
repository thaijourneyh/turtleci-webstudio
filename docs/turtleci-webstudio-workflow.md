# TurtleCI Webstudio Migration Workflow

Use Webstudio for visual editing on your local machine, then publish the static
staging output to GitHub so Vercel redeploys automatically.

## Editor

- Start command: `npm run turtleci:webstudio:editor`
- Builder URL: `http://127.0.0.1:5173/`
- Login secret: `0000`
- Local editor state: `.webstudio-home/`

This command:

1. Starts local Postgres and PostgREST with Docker.
2. Applies Webstudio migrations.
3. Starts the local Webstudio Builder.

Keep this terminal running while editing.

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

## Publish To GitHub And Vercel

Run this from the workspace root after making edits in the local Webstudio
Builder:

```sh
npm run turtleci:webstudio:publish
```

This command:

1. Rebuilds the static staging export from the current local Webstudio project.
2. Stages `turtleci-webstudio-staging/dist/client`.
3. Creates a git commit.
4. Pushes `main` to GitHub.
5. Lets Vercel redeploy automatically from the git push.

You can also provide a custom commit message:

```sh
npm run turtleci:webstudio:publish -- "Update homepage hero"
```
