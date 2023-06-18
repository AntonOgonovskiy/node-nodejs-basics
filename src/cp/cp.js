import { fork } from "child_process";
import { pipeline } from "stream";

const spawnChildProcess = async (args) => {
  const childProcess = fork("src/cp/files/script.js", args, { silent: true });

  process.stdin.on("data", (data) => {
    childProcess.stdin.write(data);
  });

  childProcess.stdout.on("data", (data) => {
    process.stdout.write(data.toString());
  });

  process.stdin.on("end", () => {
    childProcess.stdin.end();
  });
};

spawnChildProcess(["someArgument1", "someArgument2", "some3"]);
