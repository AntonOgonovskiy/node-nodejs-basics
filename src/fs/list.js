import { opendir } from "node:fs/promises";
import { access } from "node:fs/promises";

const list = async () => {
  try {
    await access("src/fs/files");
    const filesList = await opendir("src/fs/files");
    for await (const fileName of filesList) {
      console.log(fileName.name);
    }
  } catch (err) {
    console.log(err.message);
    console.log("FS operation failed");
  }
};

await list();
