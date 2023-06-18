import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";
import { pipeline } from "stream/promises";
import { rm } from "fs/promises";

const compress = async () => {
  const zip = createGzip();
  const source = createReadStream("src/zip/files/fileToCompress.txt");
  const destination = createWriteStream("src/zip/files/archive.gz");
  pipeline(source, zip, destination);
  rm("src/zip/files/fileToCompress.txt");
};

await compress();
