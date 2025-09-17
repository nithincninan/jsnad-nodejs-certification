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
//setInterval() is a built-in function used to run a piece of code repeatedly at fixed time intervals. With clearInterval() to stop it.
//queue.shift() : Removes the first element from the array. Returns the removed element.
//let queue = [1, 2, 3, 4];
//let removed = queue.shift(); 
//console.log(removed); // 1
//console.log(queue);   // [2, 3, 4]