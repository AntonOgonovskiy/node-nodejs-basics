const parseEnv = () => {
  const envList = Object.entries(process.env)
    .filter(([key, _]) => key.includes("RSS_"))
    .map(([key, item]) => `${key}=${item}`)
    .join("; ");
  console.log(envList);
};

parseEnv();
