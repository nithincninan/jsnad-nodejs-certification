// 1. Custom Message Queue with EventEmitter

// Write a Node.js script that creates a custom EventEmitter to simulate a message queue, 
// emitting messageReceived when a message is added and messageProcessed when processed, 
// with multiple listeners logging message details and status.

'use strict'
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
var queue = [];

function receiveMessage(msg) {
  myEmitter.emit('messageReceived', msg);
  queue.push(msg);
}

function processMessage() {
    const intervalId = setInterval(() => {
        //console.log('Message queue before:', queue);
        const msg = queue.shift();
        //console.log('Message queue after:', queue);
        //console.log('Message processed inside:', msg);
        myEmitter.emit('messageProcessed', msg);
        if (queue.length === 0) {
            clearInterval(intervalId);
            myEmitter.emit('allMessagesProcessed');
        }
    },
    1000);
}

myEmitter.on('messageReceived', (msg) => {
  console.log('Message received:', msg);
});

myEmitter.on('messageProcessed', (msg) => {
  console.log('Message processed:', msg);
});

receiveMessage('First Message');
receiveMessage('Second Message');
processMessage();

//Output:
// Message received: First Message
// Message received: Second Message
// Message processed: First Message
// Message processed: Second Message
// All messages processed

//IMP :
// .on() : Registers a listener function for the event. The listener can be called multiple times.
// .emit() : Emits a custom event.
// .clearInterval() : Stops the repeated execution of the code.
// .setInterval() : Runs a piece of code repeatedly at fixed time intervals.
// .setTimeout() : Runs a piece of code after a specified time interval.

//queue.shift() : Removes the first element from the array. Returns the removed element.
//let queue = [1, 2, 3, 4];
//let removed = queue.shift(); 
//console.log(removed); // 1
//console.log(queue);   // [2, 3, 4]

//queue.push(msg) : Adds a new element to the end of the array.
//let queue = [1, 2, 3, 4];
//queue.push(5);
//console.log(queue);   // [1, 2, 3, 4, 5]