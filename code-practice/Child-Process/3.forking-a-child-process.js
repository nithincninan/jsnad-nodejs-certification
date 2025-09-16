//3. Forking a Child Process
//Create a main script that forks a child process running "child.js". 
//The child process should send a message back to the parent, and the parent should print it.

const { fork } = require('child_process');

const child = fork('child.js');

child.on('message', (message) => {
  console.log(`Received from child: ${message}`);
});

child.on('error', (err) => {
  console.error(`Child process error: ${err}`);
});

child.on('exit', (code) => {
  console.log(`Child process exited with code ${code}`);
});