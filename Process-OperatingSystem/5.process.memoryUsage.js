//5. Memory Usage
//Write a Node.js script that uses the process.memoryUsage() method to monitor memory usage over time.

'use strict';
const stats = [process.memoryUsage()];

let iterations = 5;

while (iterations--) {
  const arr = [];
  let i = 10000;
  // make the CPU do some work:
  while (i--) {
    arr.push({ [Math.random()]: Math.random() });
  }
  stats.push(process.memoryUsage());
}

console.table(stats);

//OUTPUT:
//--------------------------------
//┌─────────┬──────────┬───────────┬──────────┬──────────┬──────────────┐
//│ (index) │ rss      │ heapTotal │ heapUsed │ external │ arrayBuffers │
//├─────────┼──────────┼───────────┼──────────┼──────────┼──────────────┤
//│ 0       │ 42467328 │ 5345280   │ 3699976  │ 1213654  │ 10515        │
//│ 1       │ 46792704 │ 10850304  │ 6388064  │ 1213694  │ 10515        │
//│ 2       │ 57671680 │ 12161024  │ 9177472  │ 1213694  │ 10515        │
//│ 3       │ 59899904 │ 17928192  │ 11162872 │ 1213694  │ 10515        │
//│ 4       │ 64225280 │ 19763200  │ 12289760 │ 1213694  │ 10515        │
//│ 5       │ 68550656 │ 22122496  │ 13842928 │ 1213694  │ 10515        │
//└─────────┴──────────┴───────────┴──────────┴──────────┴──────────────┘
//--------------------------------

//IMP:
//process: process is an object that contains information about the current process.

//process.memoryUsage(): The memory usage of the current process.
//Process.memoryUsage(): returns an object with rss, heapTotal, heapUsed and external properties.

// heapUsed is total memory used within the JavaScript engine, // IMP
// (rss) Resident Set Size is total used memory in RAM for the process // IMP
// process.memoryUsage().heapTotal // IMP
// process.memoryUsage().external
// process.memoryUsage().arrayBuffers

// console.table() - The console.table function in this example is taking an array of objects that have the same keys
//                   (rss, heapTotal, heapUsed, and external) and printing them out as a table. 
