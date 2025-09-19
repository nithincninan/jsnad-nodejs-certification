//7. promise-event

//Write a Node.js script that uses an `EventEmitter` to emit a `data` event with a promise.

import events from "events";

const eventEmitter = new events.EventEmitter();

setTimeout(() => eventEmitter.emit("data", { ok: "ok" }), 2000);

const data = await events.once(eventEmitter, "data");
console.log(data);
console.log("end");

//Output:
//--------------------------------
//{ ok: 'ok' }
//end
//--------------------------------

//IMP:
//.mjs : ECMAscript module (ESM) syntax
//     - import/export 
//     - here the code is using modern import/export syntax instead of require() and module.exports.
//.js : commonjs module (CJS) syntax
//     - require() and module.exports is using
//     - here the code is using commonjs module syntax instead of import/export.

//events.once(emitter, eventName, options?) :
//   - This is the function from the events module (not on the instance).
//   - It returns a Promise that resolves with the event arguments.
//   - It is a utility function from Node’s events module.

