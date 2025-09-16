// 1.merge-configuration-files-with-async.js | try catch errors
//Write an async Node.js function that reads two configuration files using `fs.promises.readFile` and merges their contents, handling errors with `try/catch` 
//and logging specific messages for `ENOENT` (file not found) and `EACCES` (permission denied).

const fs = require('fs').promises;
const path = require('path');

async function readAndMergeConfigs(file1, file2) {
  try {
    const [data1, data2] = await Promise.all([
      fs.readFile(path.resolve(file1), "utf-8"),
      fs.readFile(path.resolve(file2), "utf-8")
    ]);
    const config1 = JSON.parse(data1);
    const config2 = JSON.parse(data2);

    return { ...config1, ...config2};

  } catch (error) {
    if (error.code === "ENOENT") {
      console.error('Error: File not found', error.path);
    } else if (error.code === "EACCES") {
      console.error('Error: Permission denied', error.path);
    } else if (error instanceof SyntaxError) {
      console.error('Error: Invalid JSON in one of the config files');
    } else {
      console.error('Unexpected error: ', error);
    }
    return {};
  }

}

(async ()=> {
  const mergedConfig = await readAndMergeConfigs('config1.json','config2.json') ;
  console.log('Merged Config: ', mergedConfig);
})();

