//Without promisify (using callback)

/*const fs = require('fs');

console.log('start');
fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);
});
console.log('end');

console.log(' ');
console.log('========================= 2nd Example ======================');
console.log(' ');

//With promisify (using util.promisify)

const util = require('util');

// Convert callback-based readFile to a Promise-based one
const readFileAsync = util.promisify(fs.readFile);

async function readMyFile() {
    console.log('util - start');
    try {
        const data = await readFileAsync('data.txt', 'utf8');
        console.log("Util promisify File content:", data);
    } catch (err) {
        console.error("Error reading file:", err);
    }
    console.log('util - end');
}


readMyFile();
*/

console.log(' ');
console.log('========================= 3rd Example ======================');
console.log(' ');



function getData() {
    console.log('getData ==> start');
    //return new Promise((resolve) => {
    //  setTimeout(() => resolve("Hello Promise"), 5000);
    //});
    setTimeout(() => {
        console.log("Set timeout Hello after 3 seconds");
    }, 5000);
    return "Hello after 3 seconds";
  }
  
  //getData().then((result) => console.log(result));
  //console.log("World");

  async function fetchData() {
    console.log("World");
    const result = await getData(); // waits until resolved
    console.log('waiting for getData to resolve');
    console.log(result);
  }
  
  console.log('start');
  fetchData();
  console.log('end');