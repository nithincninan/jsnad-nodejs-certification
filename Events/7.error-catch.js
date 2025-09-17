//7. error-catch

//Write a Node.js script that uses an `EventEmitter` to emit an `error` event and a `data` event, 
//and handles the `error` event to log the error message without crashing the process.

'use strict'
const { EventEmitter } = require('events');
const ee = new EventEmitter();

process.stdin.resume(); // keep process alive

ee.on('error', (err) => {
  console.log('Error message:', err.message);
});

ee.on('data', (data) => {
  console.log('Data:', data);
});

ee.emit('error', new Error('Error Occurred'));
ee.emit('data', 'Data Received');

//Output:
//--------------------------------
//Error message: Error Occurred
//Data: Data Received
//--------------------------------

//IMP :
// .on() : It is a method of the EventEmitter class. Adds a listener for a given event.
// .emit() : It is a method of the EventEmitter class. Emits a custom event.
// process.stdin.resume() → start reading input (flowing mode).
// process.stdin.pause() → stop reading input (paused mode).