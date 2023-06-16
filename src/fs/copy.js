import { mkdir } from "node:fs/promises";
import { access } from "node:fs/promises";
import { cp } from "node:fs/promises";

const copy = async () => {
  try {
    await access("src/fs/files");
    const projectFolder = new URL("files_copy", import.meta.url);
    await mkdir(projectFolder);
    await cp("src/fs/files/", "src/fs/files_copy", { recursive: true });
  } catch (err) {
    console.log(err.message);
    console.log("FS operation failed");
  }
};

await copy();
