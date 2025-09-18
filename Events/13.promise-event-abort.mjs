//12. promise-event-abort

//Write a Node.js script that uses an `EventEmitter` to emit a `data` event with a promise,
//and uses `AbortSignal` to abort the promise after a specified time.

'use strict'
import events from "events";
//import { once, EventEmitter } from 'events'

const abort = new AbortController();
const eventEmitter = new events.EventEmitter();

setTimeout(() => eventEmitter.emit("data", { ok: "ok" }), 5000);
setTimeout(() => abort.abort("Timeout"), 2000);

try {
  const data = await events.once(eventEmitter, "data", { signal: abort.signal });

  console.log(data);
} catch (err) {
  if (err.code !== "ABORT_ERR") throw err;
  console.log("Error in wait event", err);
}
console.log("end");


//Output:
//--------------------------------
//{ ok: 'ok' }
//end
//--------------------------------

//IMP :
// AbortController: 
//     - as a means of canceling asynchronous operations. 
//     - It can also be used to cancel promisified event listeners. 

// ee.once(eventName, listener) : It is a method of the EventEmitter class/instance → listener is called only once.
// events.once(emitter, eventName, options?) : 
//   - This is the function from the events module (not on the instance).
//   - It returns a promise that resolves once an event has been fired

// .abort() : It is a method of the AbortController class. Aborts the promise.
// .signal : It is a property of the AbortController class. The signal of the AbortController.