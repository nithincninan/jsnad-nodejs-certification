//The labs-1 folder has an index.js file. Write a function that takes two numbers and adds them together, 
//and then export that function from the index.js file. Run npm test to check whether index.js was correctly implemented. 
// If it was the output should contain "passed!":

'use strict'

function add(a, b) {
  return a + b
}

module.exports = add

//Output:
//node index.js
//42