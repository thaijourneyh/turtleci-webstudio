import { spawn } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const publishPath = "turtleci-webstudio-staging/dist/client";
const commitMessage =
  process.argv.slice(2).join(" ").trim() ||
  `Publish TurtleCI Webstudio staging ${new Date().toISOString()}`;

const run = (label, command, args, options = {}) =>
  new Promise((resolveRun, reject) => {
    console.log(`\n> ${label}`);
    const child = spawn(command, args, {
      cwd: options.cwd ?? rootDir,
      env: options.env ?? process.env,
      stdio: options.stdio ?? "inherit",
    });
    let stdout = "";
    let stderr = "";
    if (options.capture === true) {
      child.stdout?.on("data", (chunk) => {
        stdout += chunk.toString();
      });
      child.stderr?.on("data", (chunk) => {
        stderr += chunk.toString();
      });
    }
    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) {
        resolveRun({ stdout, stderr, code });
        return;
      }
      const error = new Error(`${label} failed with exit code ${code}`);
      error.stdout = stdout;
      error.stderr = stderr;
      reject(error);
    });
  });

await run("Rebuild staging export from current local Webstudio project", "node", [
  "scripts/turtleci-webstudio-sync.mjs",
]);

await run("Stage static Vercel output", "git", ["add", "-f", publishPath]);

let hasChanges = true;
try {
  await run(
    "Check whether static output changed",
    "git",
    ["diff", "--cached", "--quiet", "--", publishPath],
    { stdio: "ignore" }
  );
  hasChanges = false;
} catch {
  hasChanges = true;
}

if (hasChanges === false) {
  console.log("\nNo staged changes in static output. Nothing to commit.");
  process.exit(0);
}

await run("Commit staging publish", "git", ["commit", "-m", commitMessage]);
await run("Push main to GitHub", "git", ["push", "origin", "main"]);

console.log(
  "\nDone. GitHub has the new static export, and Vercel should redeploy automatically from the push."
);
