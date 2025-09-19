//6. CPU Usage
//Write a Node.js script that uses the process.cpuUsage() method to monitor CPU usage over time.

"use strict";
const outputStats = () => {
  const uptime = process.uptime();
  const { user, system } = process.cpuUsage();
  console.log(uptime, user, system, (user + system) / 1000000);
};

outputStats();

setTimeout(() => {
  outputStats();
  const now = Date.now();
  // make the CPU do some work:
  while (Date.now() - now < 5000) {}
  outputStats();
}, 500);

//OUTPUT:
//--------------------------------
//0.211466963 12604 256288 0.268892
//0.741076868 17196 275137 0.292333
//5.74278941 5005607 309087 5.314694
//--------------------------------

//IMP:
//process: process is an object that contains information about the current process.
//process.cpuUsage(): The CPU usage of the current process. --> { user: 12345, system: 6789 }

//process.cpuUsage().user: The user CPU usage of the current process. time spent in user code (microseconds).
//process.cpuUsage().system: The system CPU usage of the current process. time spent in system tasks (microseconds).

//process.uptime(): → returns how long the Node.js process has been running (in seconds).


//Date.now() → 1726723456123.
//const now = Date.now(); --> now = 1726723456000.

//current time – start time  will give time as milliseconds = --> 2000ms > 5000ms --> false --> loop exits.

//At start: Date.now() - now = 0. Condition is true.
//After ~2 seconds: Date.now() - now = 2000ms. Still true.
//After ~5 seconds: Date.now() - now ≈ 5000ms. Condition becomes false → loop exits.
