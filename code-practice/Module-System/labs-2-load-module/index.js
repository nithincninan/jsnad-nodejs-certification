//Lab 7.2 - Loading a Module The labs-2 is a sibling to labs-1. In the index.js file of labs-2, 
//load the module that was created in the previous lab task and use that module to console.log the sum of 19 and 23.
// The labs-2 folder is set up as a CJS project. Recall that ESM can load CJS but CJS cannot load ESM during initialization. 
// If the prior exercise was completed as an ESM module it cannot be synchronously loaded into a CJS module. 
// Therefore if the prior exercise was completed in the form of an ESM module, this exercise must also be similarly converted to ESM. When index.js is executed with node it should output 42: 
// Run npm test to check whether index.js was correctly implemented.

// If it was, the output should contain "passed!":

// Load the module from labs-1
const add = require('../labs-1-create-module');

// Use the add function to calculate the sum
const result = add(19, 23);

// Print the result
console.log(result);