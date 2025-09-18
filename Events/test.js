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

process.nextTick(console.log, 'passed!')

const ee = new EventEmitter()

ee.on('test', () => { console.log('on-error') })

ee.prependListener('test', () => { console.log('prepend-listerer-error') })

ee.emit('test', Error('timeout'))
