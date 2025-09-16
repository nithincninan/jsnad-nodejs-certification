//4. Inter-Process Communication
//Write a script where a parent process forks a child process. The parent sends an array of numbers to the child, which calculates their sum and sends the result back to the parent for printing.

const {fork} = require('child_process');

const child = fork('new-child.js')

child.send([1, 2, 3, 4, 5]);

child.on('message', (sum_of_array) => {
    console.log('Sum Of Array:', sum_of_array);
})