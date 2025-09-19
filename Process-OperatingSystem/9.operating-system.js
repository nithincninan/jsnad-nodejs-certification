//9. Operating System
//Write a Node.js script that uses the os module to get the platform, type, hostname, home directory, temporary directory, system uptime, free memory, and total memory.

"use strict";
const os = require("os");

console.log("platform", os.platform());
console.log("type", os.type());
console.log("Hostname", os.hostname());
console.log("Home dir", os.homedir());
console.log("Temp dir", os.tmpdir());
console.log("system uptime", os.uptime());
console.log("freemem", os.freemem());
console.log("totalmem", os.totalmem());

//OUTPUT:
//--------------------------------
//platform darwin
//type Darwin
//Hostname nithin-MacBook-Air.local
//Home dir /Users/nithin
//Temp dir /var/folders/zq/9749719s63l224s798x8x00r0000gp/T
//system uptime 10000
//freemem 1000000000
//totalmem 10000000000
//--------------------------------

//IMP:
//os.platform(): The platform of the operating system.
//os.type(): The type of the operating system.
//os.hostname(): The hostname of the operating system.
//os.homedir(): The home directory of the operating system.
//os.tmpdir(): The temporary directory of the operating system.
//os.uptime(): The system uptime of the operating system.
//os.freemem(): The free memory of the operating system.
//os.totalmem(): The total memory of the operating system.