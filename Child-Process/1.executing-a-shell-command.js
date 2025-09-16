//1. Executing a Shell Command
//Write a Node.js script that uses child_process.exec to run the "ls -la" command (or "dir" on Windows) and prints the output to the console. Handle any errors.

const {exec} = require('child_process');

console.log(process.platform);

const platform = process.platform

if (platform === 'win32') {
    command = 'dir';
} else {
    command = 'ls -la';
}

exec(command, (error, stdout, stderr) => {
    if (error) {
        console.error('Error:', error);
    }
    if (stderr) {
        console.error('Error:', stderr);
    }
    console.log('stdout:', stdout);   
})
