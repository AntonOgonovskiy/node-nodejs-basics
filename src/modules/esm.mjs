import { sep } from "path";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import { readFile } from "fs/promises";
import { fileURLToPath } from "url";
import { dirname } from "path";
import "./files/c.json";

const loadJSON = async (path) =>
  JSON.parse(await readFile(new URL(path, import.meta.url)));

const data_a = await loadJSON("./files/a.json");
const data_b = await loadJSON("./files/b.json");

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = data_a;
} else {
  unknownObject = data_b;
}

const fileName = fileURLToPath(import.meta.url);
const dirName = dirname(fileURLToPath(import.meta.url));

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${fileName}`);
console.log(`Path to current directory is ${dirName}`);

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export default {
  unknownObject,
  myServer,
};
