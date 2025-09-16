const add = require('./index');

if (add(2, 3) === 5 && add(-1, 1) === 0) {
  console.log("passed!");
} else {
  console.error("failed!");
  process.exit(1); // exit with error
}

//Output:
//node test.js
//passed!