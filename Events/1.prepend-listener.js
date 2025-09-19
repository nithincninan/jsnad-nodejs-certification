//1. prepend-listener

//Write a Node.js script that uses an `EventEmitter` to emit a `my-event` event with two listeners,
//one that logs "1st" and one that logs "2nd", using `prependListener` to add the first listener.

'use strict'
const { EventEmitter } = require("events");

const ee = new EventEmitter();

ee.on("my-event", () => {
  console.log("2nd");
});

// Prepend a listener → this runs first
ee.prependListener("my-event", () => {
  console.log("1st");
});

ee.emit("my-event");

//Output:
//--------------------------------
//1st
//2nd
//--------------------------------

//IMP :
// .prependListener() : It is a method of the EventEmitter class. → insert listener at the beginning.
// .on() : It is a method of the EventEmitter class. Adds a listener for a given event.
// .emit() : It is a method of the EventEmitter class. Emits a custom event.