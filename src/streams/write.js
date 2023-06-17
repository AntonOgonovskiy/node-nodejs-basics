import { createWriteStream } from "fs";
import { pipeline } from "stream/promises";

const write = async () => {
  const stream = createWriteStream("src/streams/files/fileToWrite.txt");
  await pipeline(process.stdin, stream);
};

await write();
