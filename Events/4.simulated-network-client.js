//4. Simulated network client

//Write a Node.js script that simulates a network client using an `EventEmitter`, emitting `connect`, `data`, 
//and `error` events and handling `error` to log issues without crashing the process.

'use strict'
const { EventEmitter } = require('events');

class MyNetworkConnection extends EventEmitter {
    connect() {
        this.emit('connect');
    }

    receiveData(type) {
        if (type == 1) {
            this.emit('data', { payload: 'Sample payload', timestamp: new Date() });
        } else {
            this.handleError();
        }
    }

    handleError() {
        this.emit('error', new Error('Invalid data type received'));
    }
}

const newConnection = new MyNetworkConnection();

newConnection.on('connect', () => {
    console.log(`A new client has connected`);
});

newConnection.on('data', (info) => {
    console.log(`Data received from client: ${info.payload} at ${info.timestamp.toISOString()}`);
});

newConnection.on('error', (err) => {
    console.log(`Error occurred while processing data: ${err.message}`);
});

newConnection.connect();
newConnection.receiveData(1);
newConnection.receiveData(2);
newConnection.receiveData(3);
newConnection.receiveData(1);


//Output:
//--------------------------------
//A new client has connected
//Data received from client: Sample payload at 2025-09-17T10:00:00.000Z
//Error occurred while processing data: Invalid data type received
//Data received from client: Sample payload at 2025-09-17T10:00:00.000Z
//--------------------------------

//IMP :
// .on() : Registers a listener function for the event. The listener can be called multiple times.
// .emit() : Emits a custom event.
// .error() : Emits an error event.
// new Date() : Returns the current date and time.
// .toISOString() : Returns the date and time in ISO format.
