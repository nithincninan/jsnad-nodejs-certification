//9. Operating System
//Write a Node.js script that uses the os module to get the platform, type, hostname, home directory, temporary directory, system uptime, free memory, and total memory.

"use strict";
const os = require("os");

//System Info
console.log("--------------- System Info -----------------");
console.log("platform", os.platform());
console.log("type", os.type());

console.log("Hostname", os.hostname());
console.log("Home dir", os.homedir());
console.log("Temp dir", os.tmpdir());

//System Stats
console.log("--------------- System Stats -----------------");
console.log("system uptime", os.uptime()); // IMP
console.log("freemem", os.freemem());
console.log("totalmem", os.totalmem());

//OUTPUT:
//--------------------------------
//--------------- System Info -----------------
//platform linux
//type Linux
//Hostname DESKTOP-EIMJ8OI
//Home dir /home/nithincninan
//Temp dir /tmp
//--------------- System Stats -----------------
//system uptime 8166.05
//freemem 13628149760
//totalmem 14531362816
//--------------------------------

//IMP:
//os.platform(): The platform of the operating system.
//os.type(): The type of the operating system.
//os.hostname(): The hostname of the operating system.
//os.homedir(): The home directory of the operating system.
//os.tmpdir(): The temporary directory of the operating system.
//os.uptime(): The system uptime of the operating system. // IMP
//os.freemem(): The free memory of the operating system.
//os.totalmem(): The total memory of the operating system.