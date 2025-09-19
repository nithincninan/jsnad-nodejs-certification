//6. remove-all-listener

//Write a Node.js script that uses an `EventEmitter` to emit a `my-event` event with two listeners,
//one that logs "listener 1" and one that logs "listener 2", using `removeAllListeners` to remove all listeners.

const { EventEmitter } = require('events')
const ee = new EventEmitter()

const listener1 = () => { console.log('listener 1') }
const listener2 = () => { console.log('listener 2') }

ee.on('my-event', listener1)
ee.on('my-event', listener2)
ee.on('another-event', () => { console.log('another event') })

setInterval(() => {
  ee.emit('my-event')
  ee.emit('another-event')
}, 200)

setTimeout(() => {
  ee.removeAllListeners('my-event')
}, 500)

setTimeout(() => {
  ee.removeAllListeners()
}, 1100)

//setTimeout(() => {
//  clearInterval(intervalId)
//}, 1000);

//clearInterval(intervalId);

//Output:
//--------------------------------
//listener 1
//listener 2
//another event
//listener 1
//listener 2
//another event
//--------------------------------

//IMP :
// .removeAllListeners() : It is a method of the EventEmitter class. Removes all listeners from the event.
// .emit() : It is a method of the EventEmitter class. Emits a custom event.
// .clearInterval() : It is a method of the EventEmitter class. Clears the setInterval.