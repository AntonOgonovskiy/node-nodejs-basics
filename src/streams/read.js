import { createReadStream } from "fs";

const read = async () => {
  const stream = createReadStream("src/streams/files/fileToRead.txt", "utf-8");
  stream.on("data", (chunk) => process.stdout.write(chunk));
};

await read();
