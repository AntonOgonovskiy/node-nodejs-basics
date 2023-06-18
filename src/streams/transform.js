import { Transform } from "stream";
import { pipeline } from "stream/promises";

const transform = async () => {
  const transformString = new Transform({
    transform(chunk, enc, cb) {
      const stringifiedChunk = chunk.toString().trim();
      const reversedChunk = stringifiedChunk.split("").reverse().join("");
      cb(null, reversedChunk + "\n");
    },
  });
  await pipeline(process.stdin, transformString, process.stdout);
};

await transform();
