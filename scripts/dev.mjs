import { spawn } from "node:child_process";

const commands = [
  { name: "api", args: ["run", "api:dev"] },
  { name: "frontend", args: ["run", "frontend:dev"] },
];

let shuttingDown = false;

const children = commands.map(({ name, args }) => {
  const child = spawn("npm", args, {
    shell: true,
    stdio: ["inherit", "pipe", "pipe"],
  });

  const prefix = `[${name}]`;
  child.stdout.on("data", (chunk) => process.stdout.write(`${prefix} ${chunk}`));
  child.stderr.on("data", (chunk) => process.stderr.write(`${prefix} ${chunk}`));
  child.on("exit", (code) => {
    if (code && !shuttingDown) {
      console.error(`${prefix} exited with code ${code}`);
      shutdown(code);
    }
  });

  return child;
});

function shutdown(code = 0) {
  if (shuttingDown) {
    return;
  }

  shuttingDown = true;
  for (const child of children) {
    if (!child.killed) {
      child.kill();
    }
  }
  process.exitCode = code;
}

process.on("SIGINT", () => shutdown());
process.on("SIGTERM", () => shutdown());
