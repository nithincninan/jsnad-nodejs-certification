# Control Flow Questions

## 1. Async/Await with Promises
Write an async function that fetches data from two mock APIs (simulated with `setTimeout` returning Promises). Combine the results and return them as an object. Handle errors using try/catch.

## 2. Callback to Promise Conversion
Convert a callback-based function that reads a file (e.g., `fs.readFile`) into a Promise-based function using `util.promisify`. Use it to read "data.txt" and print its contents.

## 3. Parallel Promise Execution
Write a script that executes three async tasks (each returning a Promise that resolves after a random delay) in parallel using `Promise.all`. Print the results in the order they complete.

## 4. Sequential Async Processing
Implement a function that processes an array of numbers sequentially, where each number is passed to an async function that doubles it after a 1-second delay. Print each result as it completes.

## 5. Error Handling in Async Functions
Write an async function that makes a mock API call (simulated with a Promise that may reject randomly). Implement error handling to retry the call up to 3 times before throwing an error.