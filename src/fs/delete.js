import { access } from "node:fs/promises";
import { rm } from "node:fs/promises";

const remove = async () => {
  try {
    await access("src/fs/files/fileToRemove.txt");
    rm("src/fs/files/fileToRemove.txt");
  } catch (err) {
    console.log(err.message);
    console.log("FS operation failed");
  }
};

await remove();
