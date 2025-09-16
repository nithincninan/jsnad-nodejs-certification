//1. Export String
//Write a Node.js module (utils.js) that exports functions for string manipulation (e.g., capitalize, reverse). Import it into a main script 
//and use the functions to process user input, handling invalid inputs appropriately.
'use strict'

const { capitalize, reverse } = require('./utils');

// Get user input (node export-string.js hello)
const input = process.argv[2]

if (!input) {
  console.error('Error: Please provide a string as input.\nUsage: node 1.module-export-string.js <string>')
  process.exit(1)
}

try {
  console.log('Original:', input)
  console.log('Capitalized:', capitalize(input))
  console.log('Reversed:', reverse(input))
} catch (err) {
  console.error('Invalid input:', err.message)
}

//Output:
//node 1.module-export-string.js hello
//Original: hello
//Capitalized: Hello
//Reversed: olleh

//IMP
//const { capitalize, reverse } = require('./utils');
//const input = process.argv[2]