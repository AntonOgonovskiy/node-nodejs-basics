import { writeFile } from "node:fs/promises";
import { Buffer } from "node:buffer";
import { access } from "node:fs/promises";

const create = async () => {
  const data = new Uint8Array(Buffer.from("I am fresh and young"));
  try {
    await access("src/fs/files/fresh.txt");
    console.log("FS operation failed");
  } catch (err) {
    if (err) {
      const promise = writeFile("src/fs/files/fresh.txt", data);
      await promise;
    }
  }
};

await create();
