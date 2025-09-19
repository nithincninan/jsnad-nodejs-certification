//5. Job queue manager

//Create a Node.js script with an `EventEmitter` that manages a job queue, 
//emitting `jobAdded` and `jobCompleted` events and using `removeAllListeners` to stop processing jobs after a specified number of completions.

'use strict';

const { EventEmitter } = require('events');

class JobQueue extends EventEmitter {
  constructor(limit) {
    super();
    this.jobs = [];
    this.completed = 0;
    this.limit = limit;

    // Event listeners
    this.on('jobAdded', (job) => {
      console.log(`Job added: ${job}`);
      this.processJobs();
    });

    this.on('jobCompleted', (job) => {
      this.completed++;
      console.log(`Job completed: ${job}`);

      if (this.completed >= this.limit) {
        console.log(`Reached limit (${this.limit}). Stopping all listeners.`);
        this.removeAllListeners();
      }
    });
  }

  addJob(job) {
    this.jobs.push(job);
    this.emit('jobAdded', job);
  }

  processJobs() {
    while (this.jobs.length > 0 && this.listenerCount('jobCompleted') > 0) {
      const job = this.jobs.shift();
      setTimeout(() => {
        this.emit('jobCompleted', job);
      }, 500);
    }
  }
}

// --- Demo ---
const queue = new JobQueue(3); // stop after 3 completions

queue.addJob('Job 1');
queue.addJob('Job 2');
queue.addJob('Job 3');
queue.addJob('Job 4');
queue.addJob('Job 5');


//Output:
//--------------------------------
//Job added: Job 1
//Job added: Job 2
//Job added: Job 3
//Job added: Job 4
//Job added: Job 5
//Job completed: Job 1
//Job completed: Job 2
//Job completed: Job 3
//Reached limit (3). Stopping all listeners.
//--------------------------------

//IMP :
// .on() : Registers a listener function for the event. The listener can be called multiple times.
// .emit() : Emits a custom event.
// .removeAllListeners() : It is a method of the EventEmitter class. Removes all listeners for a given event.
// .listenerCount() : It is a method of the EventEmitter class.Returns the number of listeners for a given event.
// .shift() : Removes the first element from an array and returns it.
// .setTimeout() : Runs a piece of code after a specified time interval.
// .jobs : An array of jobs.
// .completed : The number of completed jobs.
// .limit : The limit of jobs to complete.