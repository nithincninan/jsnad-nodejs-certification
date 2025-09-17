//5. Job queue manager

//Create a Node.js script with an `EventEmitter` that manages a job queue, 
//emitting `jobAdded` and `jobCompleted` events and using `removeAllListeners` to stop processing jobs after a specified number of completions.

'use strict'
const { EventEmitter } = require('events');

class MyEmitter extends EventEmitter {

    constructor(maxQueueSize) {
        super();
        this.queue = [];
        this.maxQueueSize = maxQueueSize - 1;
    }

    jobAdded(job) {
        if (this.queue.length <= this.maxQueueSize) {
            this.queue.push(job);
            this.emit('jobAdded', job);
        }
    }

    jobProcessing() {
        const interval = setInterval(() => {
            if (this.queue.length > 0)  {
                if (this.queue.length <= this.maxQueueSize) {
                    const job = this.queue.shift();
                    this.emit('jobProcessing', job);
                } else {
                    this.jobCompleted(interval);
                }
            } else {
                this.jobCompleted(interval);
            }
        }, 1000);
    }

    jobCompleted(interval) {
        clearInterval(interval);
        this.emit('jobCompleted');
        this.removeAllListeners();
    }
}

const myEmitter = new MyEmitter(3);

myEmitter.on('jobAdded', (job) => {
    console.log(`Job added: ${job}`);
});

myEmitter.on('jobCompleted', () => {
    console.log(`All Job completed`);
});

myEmitter.jobAdded('Job 1');
myEmitter.jobAdded('Job 2');
myEmitter.jobAdded('Job 3');
myEmitter.jobAdded('Job 4');
myEmitter.jobProcessing();
myEmitter.jobAdded('Job 5');
myEmitter.jobAdded('Job 6');
