//4. event-listner-once

//Write a Node.js script that uses an `EventEmitter` to emit a `my-event` event with a listener that logs "my-event fired" only once.

'use strict'
const { EventEmitter } = require("events");

const ee = new EventEmitter();

ee.once("my-event", () => {
  console.log("my-event fired");
});
ee.emit("my-event");
ee.emit("my-event");
ee.emit("my-event");

//Output:
//--------------------------------
//my-event fired
//--------------------------------

//IMP :
// .once() : It is a method of the EventEmitter class → listener is called only once.
// .emit() : It is a method of the EventEmitter class. Emits a custom event.
