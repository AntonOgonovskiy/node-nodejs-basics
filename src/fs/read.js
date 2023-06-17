import { readFile } from "node:fs/promises";

const read = async () => {
  try {
    const content = await readFile("src/fs/files/fileToRead.txt", {
      encoding: "utf8",
    });
    console.log(content);
  } catch (err) {
    console.log(err.message);
    console.log("FS operation failed");
  }
};

await read();
