//1. Custom Message Queue with EventEmitter
// Write a Node.js script that creates a custom EventEmitter to simulate a message queue, emitting messageReceived when a message is added and messageProcessed when processed, 
//  with multiple listeners logging message details and status.

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
        const msg = queue.shift();
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