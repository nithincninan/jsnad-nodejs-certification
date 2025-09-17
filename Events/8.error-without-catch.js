//8. error-without-catch

//Write a Node.js script that uses an `EventEmitter` to emit an `error` event without a catch block, 
//and logs the error message.

'use strict'
const { EventEmitter } = require('events');

const ee = new EventEmitter();

process.stdin.resume(); // keep process alive

ee.emit('error', new Error('Error Occurred'));

//Output:
//--------------------------------
//Error message: Error Occurred
//--------------------------------