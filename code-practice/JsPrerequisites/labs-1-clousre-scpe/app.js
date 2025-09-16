//Clousre Scope

//Implement the prefixer function. When ready, open a terminal, navigate to the labs-1 folder and run your program with node app.js. 
//This program will not run correctly until the implementation is complete. When successfully implemented the output should be as follows:

'use strict'

//Output:
//--------------------------------
function prefixer(prefix) {
  return function(name) {
    return prefix + name;
  }
}
//--------------------------------

const sayHiTo = prefixer('Hello ')
const sayByeTo = prefixer('Goodbye ')
console.log(sayHiTo('Dave')) // prints 'Hello Dave'
console.log(sayHiTo('Annie')) // prints 'Hello Annie'
console.log(sayByeTo('Dave')) // prints 'Goodbye Dave'

//Output:
//--------------------------------
//Hello Dave
//Hello Annie
//Goodbye Dave
//--------------------------------


