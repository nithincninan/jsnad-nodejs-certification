//5. removeeventlistener

const { EventEmitter } = require("events");
const ee = new EventEmitter();

const listener1 = () => {
  console.log("listener 1");
};
const listener2 = () => {
  console.log("listener 2");
};

ee.on("my-event", listener1);
ee.on("my-event", listener2);

setInterval(() => {
  ee.emit("my-event");
}, 200);

setTimeout(() => {
  ee.removeListener("my-event", listener1);
}, 500);

setTimeout(() => {
  ee.removeListener("my-event", listener2);
}, 1100);


//Output:
//--------------------------------
//listener 1
//listener 2
//listener 1
//listener 2
//listener 2
//listener 2
//listener 2
//--------------------------------

//IMP :
// .removeListener() : It is a method of the EventEmitter class. Removes a listener from the event.
// .emit() : It is a method of the EventEmitter class. Emits a custom event.


