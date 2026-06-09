import { spawn } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const builderDir = resolve(rootDir, "webstudio-builder");
const stagingDir = resolve(rootDir, "turtleci-webstudio-staging");
const projectId = "a99d5fa7-683f-4129-974a-e8564180e8df";

const env = {
  ...process.env,
  PATH: `/private/tmp/webstudio-bin:${process.env.PATH ?? ""}`,
  HOME:
    process.env.WEBSTUDIO_HOME ??
    resolve(rootDir, ".webstudio-home"),
  COREPACK_HOME:
    process.env.COREPACK_HOME ?? "/Users/thaitran/.cache/node/corepack",
  NODE_TLS_REJECT_UNAUTHORIZED: process.env.NODE_TLS_REJECT_UNAUTHORIZED ?? "0",
};

const run = (label, command, args, options = {}) =>
  new Promise((resolveRun, reject) => {
    console.log(`\n> ${label}`);
    const child = spawn(command, args, {
      cwd: options.cwd ?? rootDir,
      env,
      stdio: "inherit",
    });
    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) {
        resolveRun();
        return;
      }
      reject(new Error(`${label} failed with exit code ${code}`));
    });
  });

await run("Prepare Webstudio assets", "node", [
  "scripts/prepare-webstudio-staging-assets.mjs",
]);

await run("Export Webstudio project data", "pnpm", [
  "tsx",
  "--conditions=webstudio",
  "scripts/export-local-project-data.ts",
  projectId,
  stagingDir,
], {
  cwd: builderDir,
});

await run("Generate Webstudio staging app", "node", [
  resolve(
    builderDir,
    "node_modules/.pnpm/node_modules/webstudio/bin.js"
  ),
  "build",
  "--template",
  "ssg-vercel",
], {
  cwd: stagingDir,
});

await run("Build static staging output", "npm", ["run", "build"], {
  cwd: stagingDir,
});

console.log(
  "\nDone. The TurtleCI Webstudio staging export is rebuilt from the current Webstudio project."
);
