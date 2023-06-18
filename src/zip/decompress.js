import { createReadStream, createWriteStream } from "fs";
import { createGunzip } from "zlib";
import { pipeline } from "stream/promises";
import { rm } from "fs/promises";

const decompress = async () => {
  const zip = createGunzip();
  const source = createReadStream("src/zip/files/archive.gz");
  const destination = createWriteStream("src/zip/files/fileToCompress.txt");
  pipeline(source, zip, destination);
  rm("src/zip/files/archive.gz");
};

await decompress();
