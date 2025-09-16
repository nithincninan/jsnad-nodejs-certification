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
