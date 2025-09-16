# Events Questions

## 1. Custom message queue with EventEmitter
Write a Node.js script that creates a custom `EventEmitter` to simulate a message queue, emitting `messageReceived` when a message is added and `messageProcessed` when processed, with multiple listeners logging message details and status.

## 2. Timer class extending EventEmitter
Create a Node.js class that extends `EventEmitter` to model a timer, emitting `tick` events every second and a `stopped` event when the timer is stopped, using `on` for `tick` and `once` for `stopped`.

## 3. Keyboard input via process.stdin
Develop a Node.js script that uses an `EventEmitter` to handle keyboard input from `process.stdin`, emitting a `keyPressed` event for each input and attaching a listener to process and log the data.

## 4. Simulated network client
Write a Node.js script that simulates a network client using an `EventEmitter`, emitting `connect`, `data`, and `error` events and handling `error` to log issues without crashing the process.

## 5. Job queue manager
Create a Node.js script with an `EventEmitter` that manages a job queue, emitting `jobAdded` and `jobCompleted` events and using `removeAllListeners` to stop processing jobs after a specified number of completions.