export const parseArgs = () => {
  const allArguments = process.argv.slice(2);
  for (let i = 0; i < allArguments.length; i++) {
    const str = `${allArguments[i].substring(2)} is ${allArguments[i + 1]}`;
    console.log(str);
    i++;
  }
};

parseArgs();
