import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import React from "react";
import type { AppContext } from "../packages/trpc-interface/src/index.server";

globalThis.React = React;

const { loadDevBuildByProjectId } = await import(
  "../packages/project-build/src/index.server"
);
const { loadAssetsByProject } = await import(
  "../packages/asset-uploader/src/index.server"
);
const { createClient } = await import("../packages/postgrest/src/index.server");
const { findPageByIdOrPath, getAllPages, getStyleDeclKey } = await import(
  "../packages/sdk/src/index"
);
const { serializePages } = await import(
  "../packages/project-migrations/src/pages"
);

const getPair = <Item extends { id: string }>(item: Item): [string, Item] => [
  item.id,
  item,
];

const projectId = process.argv[2];
const outputDir = process.argv[3];

if (projectId === undefined || outputDir === undefined) {
  console.error(
    "Usage: pnpm tsx scripts/export-local-project-data.ts <project-id> <output-dir>"
  );
  process.exit(1);
}

const postgrest = {
  client: createClient(
    process.env.POSTGREST_URL ?? "http://localhost:3000",
    process.env.POSTGREST_API_KEY ?? ""
  ),
};

const context = {
  authorization: { type: "service", isServiceCall: true },
  postgrest,
} as AppContext;

const build = await loadDevBuildByProjectId(context, projectId);
const assets = await loadAssetsByProject(projectId, context);
const page = findPageByIdOrPath("/", build.pages);

if (page === undefined) {
  throw new Error("Root page was not found in the Webstudio project.");
}

const data = {
  build: {
    id: build.id,
    projectId: build.projectId,
    version: build.version,
    createdAt: build.createdAt,
    updatedAt: build.updatedAt,
    pages: serializePages(build.pages),
    breakpoints: build.breakpoints.map(getPair),
    styles: build.styles.map((item) => [getStyleDeclKey(item), item]),
    styleSources: build.styleSources.map(getPair),
    styleSourceSelections: build.styleSourceSelections.map((item) => [
      item.instanceId,
      item,
    ]),
    props: build.props.map(getPair),
    dataSources: build.dataSources.map(getPair),
    resources: build.resources.map(getPair),
    instances: build.instances.map(getPair),
    deployment: build.deployment,
  },
  page,
  pages: getAllPages(build.pages),
  assets,
  origin: process.env.WEBSTUDIO_EXPORT_ORIGIN ?? "https://wstd.dev:5173",
  projectDomain: "turtleci-staging",
  projectTitle: "TurtleCI",
};

const webstudioDir = join(outputDir, ".webstudio");
await mkdir(webstudioDir, { recursive: true });
await writeFile(
  join(webstudioDir, "config.json"),
  JSON.stringify({ projectId }, null, 2)
);
await writeFile(join(webstudioDir, "data.json"), JSON.stringify(data, null, 2));

console.log(
  JSON.stringify(
    {
      outputDir,
      projectId,
      buildId: build.id,
      pages: data.pages.length,
      assets: assets.length,
    },
    null,
    2
  )
);
