//6. Process Environment Variables
//Write a Node.js script that uses process.env to print all environment variables and their values.

"use strict";
console.log("--------------- Process Info -----------------");
console.log("Current Directory", process.cwd());
console.log("Process Platform", process.platform);
console.log("Process ID", process.pid);
//console.log("Process", process.chdir);
console.log("Process Env Variables", process.env);
console.log("Process Env Variables Path", process.env.PATH);
console.log("Process Env Variables PWD", process.env.PWD);

//OUTPUT:
//--------------------------------
//Current Directory /Users/sabbi/Desktop/Node.js/Process-OperatingSystem
//Process Platform darwin
//Process ID 12345
//Process ID { NODE_ENV: 'development', PATH: '/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin', PWD: '/Users/sabbi/Desktop/Node.js/Process-OperatingSystem', ... }
//--------------------------------

//IMP:

//process: process is an object that contains information about the current process.
//process.chdir is a function that changes the current working directory for the current process.
//process.env is an object that contains all the environment variables for the current process.
//process.env.PATH is the path variable for the current process.
//process.env.PWD is the current working directory for the current process.