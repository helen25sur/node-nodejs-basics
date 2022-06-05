export const parseEnv = () => {

  for (const itemKey of Object.keys(process.env)) {
    if (itemKey.includes('RSS')) {
      const strResName = `${itemKey}=${process.env[itemKey]}`;
      console.log(strResName);
    }
  }
};

parseEnv();
