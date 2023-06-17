const parseArgs = () => {
  const arr = [];
  process.argv.slice(2).map((key, item, array) => {
    if (item % 2 === 0) {
      arr.push(`${key.slice(2)} is ${array[item + 1]}`);
    }
  });
  console.log(arr.join(", "));
};

parseArgs();
