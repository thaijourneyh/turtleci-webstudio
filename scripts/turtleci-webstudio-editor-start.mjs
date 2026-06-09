import { spawn } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import net from "node:net";
import http from "node:http";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const builderDir = resolve(rootDir, "webstudio-builder");
const composeFile = resolve(rootDir, "docker-compose.webstudio-local.yml");
const pgPort = process.env.PGPORT ?? "5433";
const postgrestPort = process.env.POSTGREST_PORT ?? "3001";

const env = {
  ...process.env,
  PATH: `/private/tmp/webstudio-bin:${process.env.PATH ?? ""}`,
  HOME:
    process.env.WEBSTUDIO_HOME ??
    resolve(rootDir, ".webstudio-home"),
  COREPACK_HOME:
    process.env.COREPACK_HOME ?? "/Users/thaitran/.cache/node/corepack",
  NODE_TLS_REJECT_UNAUTHORIZED: process.env.NODE_TLS_REJECT_UNAUTHORIZED ?? "0",
  PGPORT: pgPort,
  POSTGREST_PORT: postgrestPort,
  DATABASE_URL:
    process.env.DATABASE_URL ??
    `postgresql://postgres:pass@127.0.0.1:${pgPort}/webstudio?pgbouncer=true`,
  DIRECT_URL:
    process.env.DIRECT_URL ??
    `postgresql://postgres:pass@127.0.0.1:${pgPort}/webstudio`,
  POSTGREST_URL:
    process.env.POSTGREST_URL ?? `http://127.0.0.1:${postgrestPort}`,
};

const run = (label, command, args, options = {}) =>
  new Promise((resolveRun, reject) => {
    console.log(`\n> ${label}`);
    const child = spawn(command, args, {
      cwd: options.cwd ?? rootDir,
      env: options.env ?? env,
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

const waitForTcp = (port, host = "127.0.0.1", timeoutMs = 120000) =>
  new Promise((resolveWait, reject) => {
    const start = Date.now();
    const tryConnect = () => {
      const socket = net.createConnection({ port, host });
      socket.on("connect", () => {
        socket.destroy();
        resolveWait();
      });
      socket.on("error", () => {
        socket.destroy();
        if (Date.now() - start > timeoutMs) {
          reject(new Error(`Timed out waiting for ${host}:${port}`));
          return;
        }
        setTimeout(tryConnect, 1000);
      });
    };
    tryConnect();
  });

const waitForHttp = (url, timeoutMs = 120000) =>
  new Promise((resolveWait, reject) => {
    const start = Date.now();
    const tryRequest = () => {
      const req = http.get(url, (res) => {
        res.resume();
        resolveWait();
      });
      req.on("error", () => {
        if (Date.now() - start > timeoutMs) {
          reject(new Error(`Timed out waiting for ${url}`));
          return;
        }
        setTimeout(tryRequest, 1000);
      });
    };
    tryRequest();
  });

await run(
  "Start local Postgres and PostgREST",
  "/bin/zsh",
  ["-lc", `/usr/local/bin/docker compose -f '${composeFile}' up -d`],
  {
    env: {
      ...process.env,
      PATH: env.PATH,
    },
  }
);

console.log(`\n> Waiting for Postgres on 127.0.0.1:${pgPort}`);
await waitForTcp(Number(pgPort));

console.log(`> Waiting for PostgREST on http://127.0.0.1:${postgrestPort}`);
await waitForHttp(`http://127.0.0.1:${postgrestPort}`);

await run("Generate Prisma client", "pnpm", [
  "--filter=@webstudio-is/prisma-client",
  "generate",
], {
  cwd: builderDir,
});

await run("Apply Webstudio migrations", "pnpm", [
  "--filter=@webstudio-is/prisma-client",
  "migrations",
  "migrate",
  "--dev",
  "--cwd",
  "../../apps/builder",
], {
  cwd: builderDir,
});

console.log("\n> Starting Webstudio Builder");
console.log("> Login secret: 0000");
console.log("> Local editor will use persistent state in .webstudio-home/");

const builder = spawn("pnpm", ["--filter=@webstudio-is/builder", "dev"], {
  cwd: builderDir,
  env,
  stdio: "inherit",
});

builder.on("exit", (code) => {
  process.exit(code ?? 0);
});
