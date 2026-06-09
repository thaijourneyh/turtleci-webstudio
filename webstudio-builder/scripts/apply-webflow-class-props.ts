import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import React from "react";
import type { Prop } from "../packages/sdk/src/index";
import type { AppContext } from "../packages/trpc-interface/src/index.server";

globalThis.React = React;

const { createClient } = await import("../packages/postgrest/src/index.server");
const { loadDevBuildByProjectId, serializeData } = await import(
  "../packages/project-build/src/index.server"
);

const projectId = process.argv[2];
const exportedProjectDir = process.argv[3];

if (projectId === undefined) {
  console.error(
    "Usage: pnpm tsx scripts/apply-webflow-class-props.ts <project-id> [exported-project-dir]"
  );
  process.exit(1);
}

const suffixPattern = /-\d+$/;

const addClassName = (classNames: Set<string>, rawName: string) => {
  for (const part of rawName.split(/[.\s]+/)) {
    if (part === "") {
      continue;
    }
    classNames.add(part);
    classNames.add(part.replace(suffixPattern, ""));
  }
};

const getPropUpdates = (data: {
  props: Prop[];
  styleSources: Array<{ id: string; type: string; name?: string }>;
  styleSourceSelections: Array<{ instanceId: string; values: string[] }>;
}) => {
  const styleSourceById = new Map(
    data.styleSources.map((styleSource) => [styleSource.id, styleSource])
  );

  const classPropByInstanceId = new Map<string, Prop>();
  const props = new Map(data.props.map((prop) => [prop.id, prop]));

  for (const prop of data.props) {
    if (prop.name === "class") {
      classPropByInstanceId.set(prop.instanceId, prop);
    }
  }

  let created = 0;
  let updated = 0;

  for (const selection of data.styleSourceSelections) {
    const classNames = new Set<string>();

    for (const styleSourceId of selection.values) {
      const styleSource = styleSourceById.get(styleSourceId);
      if (styleSource?.type !== "token" || styleSource.name === undefined) {
        continue;
      }
      addClassName(classNames, styleSource.name);
    }

    if (classNames.size === 0) {
      continue;
    }

    const existingProp = classPropByInstanceId.get(selection.instanceId);
    const mergedClassNames = new Set(
      existingProp?.value
        ?.split(/\s+/)
        .filter((className) => className.length > 0) ?? []
    );

    for (const className of classNames) {
      mergedClassNames.add(className);
    }

    const value = Array.from(mergedClassNames).join(" ");

    if (existingProp === undefined) {
      const prop: Prop = {
        id: `${selection.instanceId}:webflow-classes`,
        instanceId: selection.instanceId,
        name: "class",
        type: "string",
        value,
      };
      props.set(prop.id, prop);
      classPropByInstanceId.set(selection.instanceId, prop);
      created += 1;
    } else if (existingProp.value !== value) {
      props.set(existingProp.id, { ...existingProp, value });
      classPropByInstanceId.set(selection.instanceId, {
        ...existingProp,
        value,
      });
      updated += 1;
    }
  }

  return { props: Array.from(props.values()), created, updated };
};

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
const dbUpdates = getPropUpdates({
  props: build.props,
  styleSources: build.styleSources,
  styleSourceSelections: build.styleSourceSelections,
});

const dbUpdate = await postgrest.client
  .from("Build")
  .update({ props: serializeData<Prop>(dbUpdates.props) })
  .eq("id", build.id);

if (dbUpdate.error) {
  throw dbUpdate.error;
}

let exportedUpdates: undefined | { created: number; updated: number };

if (exportedProjectDir !== undefined) {
  const dataPath = join(exportedProjectDir, ".webstudio", "data.json");
  const exportedData = JSON.parse(await readFile(dataPath, "utf8"));
  const updates = getPropUpdates({
    props: exportedData.build.props.map(([, prop]: [string, Prop]) => prop),
    styleSources: exportedData.build.styleSources.map(
      ([, styleSource]: [string, { id: string; type: string; name?: string }]) =>
        styleSource
    ),
    styleSourceSelections: exportedData.build.styleSourceSelections.map(
      ([, selection]: [string, { instanceId: string; values: string[] }]) =>
        selection
    ),
  });

  exportedData.build.props = updates.props.map((prop) => [prop.id, prop]);
  await writeFile(dataPath, JSON.stringify(exportedData, null, 2));
  exportedUpdates = { created: updates.created, updated: updates.updated };
}

console.log(
  JSON.stringify(
    {
      projectId,
      buildId: build.id,
      database: { created: dbUpdates.created, updated: dbUpdates.updated },
      exported: exportedUpdates,
    },
    null,
    2
  )
);
