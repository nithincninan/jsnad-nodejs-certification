//2. Callback to Promise Conversion
//Convert a callback-based function that reads a file (e.g., fs.readFile) into a Promise-based function using util.promisify. Use it to read "data.txt" and print its contents.

const fs = require('fs');
const util = require('util');

// Convert fs.readFile to a Promise-based function
const readFilePromise = util.promisify(fs.readFile);

async function readDataFile() {
  console.log('readDataFile ==> start');
  try {
    console.log('readDataFile ==> 1');
    // Read the file using the promisified function
    const data = await readFilePromise('data.txt', 'utf8');
    console.log('readDataFile ==> 2');
    console.log("File contents:", data);
    console.log('readDataFile ==> 3');
  } catch (error) {
    console.log('readDataFile ==> error');
    console.error("Error reading file:", error);
    throw error;
  }
  console.log('readDataFile ==> end');
}

console.log('start');
readDataFile();
console.log('end');


/*console.log(' ');
console.log('========================= 2nd Example ======================');
console.log(' ');



// Convert fs.readFile (which uses callback) to a Promise-based function
const readFileAsync = util.promisify(fs.readFile);

// Async function to read and print file contents
async function readFileAndPrint() {
  try {
    const data = await readFileAsync('data.txt', 'utf8');
    console.log('File contents:', data);
  } catch (err) {
    console.error('Error reading file:', err.message);
  }
}

// Call the function
readFileAndPrint();
*/