//5. Killing a Child Process
//Write a script that spawns a child process running a loop that prints numbers every second. 
//After 5 seconds, the parent process should terminate the child process gracefully.

const {spawn} = require('child_process');

const child = spawn('node', ['childLoop.js'])

child.stdout.on('data', (data) => {
    console.log(`Child process output: ${data}`);
});

setTimeout(() => {
    child.kill();
    console.log('Child process terminated');
}, 5000)