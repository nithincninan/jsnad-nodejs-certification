//1.Read and Create Settings File
//Write a Node.js script that uses fs.promises.readFile to read a settings.json file and parse its contents into an object. If the file is missing, create it with default settings using fs.promises.writeFile. Handle errors such as invalid JSON or lack of write permissions, logging descriptive messages.

const fs = require('fs');

const settings = fs.readFileSync('settings.json', 'utf8');

console.log(settings);

//Answer
const fs = require('fs');

const settings = fs.readFileSync('settings.json', 'utf8');  