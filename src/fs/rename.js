import { access } from "node:fs/promises";
import { rename as changeName } from "node:fs/promises";
try {
  await access("src/fs/files/wrongFilename.txt");
  await changeName(
    "src/fs/files/wrongFilename.txt",
    "src/fs/files/properFilename.md"
  );
} catch (err) {
  console.log(err.message);
  console.log("FS operation failed");
}
const rename = async () => {};

await rename();
