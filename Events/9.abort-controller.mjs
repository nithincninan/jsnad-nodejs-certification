// AbortController example in Node.js

// In Node.js v15+ AbortController is built-in, so you can just do:
// const { AbortController } = require('node:abort_controller');

function doSomethingAsync(signal) {
  return new Promise((resolve, reject) => {
    // If the signal is already aborted, reject immediately
    if (signal.aborted) {
      return reject(new Error('Operation was aborted before it started'));
    }

    // Simulate a long task
    const timer = setTimeout(() => {
      resolve('Task completed successfully!');
    }, 3000);

    // Listen for abort event
    signal.addEventListener('abort', () => {
      clearTimeout(timer);
      reject(new Error('Task was aborted!'));
    });
  });
}

async function main() {
  const controller = new AbortController(); // create controller
  const { signal } = controller;            // get the signal

  // Start the async operation
  const task = doSomethingAsync(signal);

  // Abort after 1 second
  setTimeout(() => {
    console.log('Aborting...');
    controller.abort();  // this triggers the "abort" event
  }, 1000);

  try {
    const result = await task;
    console.log(result);
  } catch (err) {
    console.error('Error:', err.message);
  }
}

main();
