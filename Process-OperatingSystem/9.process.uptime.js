//9. Process Uptime
//Write a Node.js script that uses process.uptime() to print the uptime of the process.

"use strict";
console.log("Process Uptime", process.uptime());
setTimeout(() => {
  console.log("Process Uptime", process.uptime());
}, 1000);

//OUTPUT:
//--------------------------------
//Process Uptime 0.000169402
//Process Uptime 0.000169402
//--------------------------------

//IMP:
//process.uptime(): The uptime of the process.