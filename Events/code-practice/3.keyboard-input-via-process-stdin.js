//3. Keyboard input via process.stdin

//Develop a Node.js script that uses an `EventEmitter` to handle keyboard input from `process.stdin`, 
//emitting a `keyPressed` event for each input and attaching a listener to process and log the data.

'use strict'
// keyEmitter.js
const EventEmitter = require('events');

// Create a custom emitter
class KeyEmitter extends EventEmitter {}
const keyEmitter = new KeyEmitter();

// Attach listener to handle 'keyPressed' event
keyEmitter.on('keyPressed', (key) => {
  console.log(`You pressed: "${key}"`);
  
  if (key.toLowerCase() === 'exit') {
    console.log('Exiting program...');
    process.exit(0);
  }
});

// Configure stdin to read input
process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const key = data.trim();
  keyEmitter.emit('keyPressed', key);
});

console.log('Type something (type "exit" to quit):');

//Output:
//--------------------------------
//Type something (type "exit" to quit):
//a          
//You pressed: "a"
//d
//You pressed: "d"
//c
//You pressed: "c"
//exit
//You pressed: "exit"
//Exiting program...
//--------------------------------

//IMP : 
//stdin : Standard Input
//stdout : Standard Output
//stderr : Standard Error
//process.stdin.setRawMode(true); : Enables raw mode so we get control over Ctrl+C
//process.stdin.resume(); : Resumes the stdin stream
//process.stdin.setEncoding('utf8'); : Sets the encoding to utf8
//process.stdin.on('data', (data) => { : Listens for data on the stdin stream
//process.exit(0); : Exits the process
//keyEmitter.emit('keyPressed', key); : Emits a custom event
//keyEmitter.on('keyPressed', (key) => { : Registers a listener function for the event
