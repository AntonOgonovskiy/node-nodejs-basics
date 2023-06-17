import { createHash } from "crypto";
import { readFile } from "node:fs/promises";

const calculateHash = async () => {
  const content = await readFile("src/hash/files/fileToCalculateHashFor.txt", {
    encoding: "utf8",
  });
  const hash = createHash("sha256").update(content).digest("hex");
  console.log(hash);
};

await calculateHash();
