//const EventEmitter = require('events');
//const ee = new EventEmitter();
//ee.once('my-event', (username, id) => {
//  console.log(`my-event ${username} ${id}`);
//});
//ee.on('my-event', (username, id) => {
//  console.log(`my-event ${username} ${id}`);
//});
//ee.emit('my-event', 'nithin', 43);

'use strict'
const { EventEmitter } = require('events')

const ee = new EventEmitter()

const listener1 = (a,b) => {
    console.log('---- listener1 ----'+a+b);
};

const listener2 = (a,b) => {
    console.log('---- listener2 ----'+a+b);
};

ee.on('my-event', listener1);
ee.on('my-event', listener2);

setInterval(() => {
    ee.emit('my-event', 10, 20);
}, 200);

setTimeout(() =>{
    ee.removeListener('my-event', listener1)
}, 500);

setTimeout(() => {
    ee.removeListener('my-event', listener2)
}, 1100);



