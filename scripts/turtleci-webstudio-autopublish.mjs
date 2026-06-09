import { spawn } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const intervalSeconds = Math.max(
  15,
  Number.parseInt(process.env.PUBLISH_INTERVAL_SECONDS ?? "60", 10) || 60
);

const runPublish = () =>
  new Promise((resolveRun) => {
    const child = spawn("node", ["scripts/turtleci-webstudio-publish.mjs"], {
      cwd: rootDir,
      env: process.env,
      stdio: "inherit",
    });
    child.on("exit", () => resolveRun());
  });

console.log(
  `Auto-publish loop started. Checking for Webstudio changes every ${intervalSeconds} seconds.`
);

let running = false;

const tick = async () => {
  if (running) {
    return;
  }
  running = true;
  try {
    await runPublish();
  } finally {
    running = false;
  }
};

await tick();
setInterval(tick, intervalSeconds * 1000);
