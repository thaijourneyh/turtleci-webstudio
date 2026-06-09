import React from "react";
import type { AppContext } from "../packages/trpc-interface/src/index.server";

globalThis.React = React;

const { createClient } = await import("../packages/postgrest/src/index.server");
const { createBuild, loadDevBuildByProjectId } = await import(
  "../packages/project-build/src/index.server"
);
const { createOrLoginWithDev } = await import(
  "../apps/builder/app/shared/db/user.server"
);

const projectId = process.argv[2];
const title = process.argv[3] ?? "TurtleCI";
const domain = process.argv[4] ?? "turtleci-staging";
const email = process.argv[5] ?? "hello@webstudio.is";

if (projectId === undefined) {
  console.error(
    "Usage: pnpm tsx scripts/bootstrap-local-project.ts <project-id> [title] [domain] [email]"
  );
  process.exit(1);
}

const postgrest = {
  client: createClient(
    process.env.POSTGREST_URL ?? "http://localhost:3000",
    process.env.POSTGREST_API_KEY ?? ""
  ),
};

const serviceContext = {
  authorization: { type: "service", isServiceCall: true },
  postgrest,
} as AppContext;

const owner = await createOrLoginWithDev(serviceContext, email);

const projectResult = await postgrest.client
  .from("Project")
  .select("id, title, domain, userId")
  .eq("id", projectId)
  .maybeSingle();

if (projectResult.error) {
  throw projectResult.error;
}

if (projectResult.data == null) {
  const insert = await postgrest.client.from("Project").insert({
    id: projectId,
    title,
    domain,
    userId: owner.id,
  });
  if (insert.error) {
    throw insert.error;
  }
} else if (
  projectResult.data.userId !== owner.id ||
  projectResult.data.title !== title ||
  projectResult.data.domain !== domain
) {
  const update = await postgrest.client
    .from("Project")
    .update({
      userId: owner.id,
      title,
      domain,
    })
    .eq("id", projectId);
  if (update.error) {
    throw update.error;
  }
}

let createdBuild = false;
try {
  await loadDevBuildByProjectId(serviceContext, projectId);
} catch (error) {
  if (error instanceof Error && error.message === "No dev build found") {
    await createBuild({ projectId }, serviceContext);
    createdBuild = true;
  } else {
    throw error;
  }
}

console.log(
  JSON.stringify(
    {
      projectId,
      ownerEmail: email,
      ownerId: owner.id,
      createdBuild,
    },
    null,
    2
  )
);
