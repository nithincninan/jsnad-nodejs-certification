//2. Timer class extending EventEmitter

//Create a Node.js class that extends `EventEmitter` to model a timer, 
//emitting `tick` events every second and a `stopped` event when the timer is stopped, using `on` for `tick` and `once` for `stopped`.

'use strict'
const EventEmitter = require('events');

class Timer extends EventEmitter {
    start() {
        this.intervalId = setInterval(() => {
            this.emit('tick', { timestamp: Date.now() });
        }, 1000);
    }

    stop(reason) {
        clearInterval(this.intervalId);
        this.emit('stopped', { reason });
    }
}

// Usage
const timer = new Timer();

timer.on('tick', (data) => {
    console.log('Tick:', data);
});

timer.once('stopped', (data) => {
    console.log('Stopped:', data);
});

timer.start();

// Stop after 6 seconds
setTimeout(() => {
    timer.stop('Manual stop');
}, 6000);


//Output:
// Tick: { timestamp: 1726531200000 }
// Tick: { timestamp: 1726531201000 }
// Tick: { timestamp: 1726531202000 }
// Tick: { timestamp: 1726531203000 }
// Tick: { timestamp: 1726531204000 }
// Tick: { timestamp: 1726531205000 }
// Stopped: { reason: 'Manual stop' }

//IMP :
// .once() : Registers a one-time listener function for the event. The listener is invoked only once, and then removed.
// .emit() : Emits a custom event.
// .on() : Registers a listener function for the event. The listener can be called multiple times.
// .clearInterval() : Stops the repeated execution of the code.
// .setInterval() : Runs a piece of code repeatedly at fixed time intervals.
// Date.now() : Returns the current timestamp in milliseconds.
// .setTimeout() : Runs a piece of code after a specified time interval.
