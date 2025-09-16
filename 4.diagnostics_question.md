# Diagnostics and Debugging Questions

## 1. Synchronous JSON parsing performance
Write a Node.js script that processes a large JSON dataset with synchronous parsing, measures time with `console.time` and `console.timeEnd`, then optimizes the script using streams to improve performance and logs the before/after timing difference.

## 2. Memory leak investigation
Create a Node.js application that accumulates objects in a global array to reproduce a memory leak, run it with `node --inspect` and use Chrome DevTools heap snapshots to identify the leak, then modify the script to limit memory usage by clearing or capping old entries.

## 3. Recursive logic debugging
Develop a Node.js script that performs a recursive calculation (e.g., factorial) with a logic error, debug the recursion stack using `node --inspect-brk` in Chrome DevTools, and correct the logic.

## 4. Deprecated API warning tracing
Write a Node.js script that uses a deprecated API (e.g., `fs.exists`) to emit a warning, run it with `--trace-warnings` to capture the warning stack trace, and update the script to use the recommended API (e.g., `fs.access`).

## 5. Inspecting complex objects
Create a Node.js script that logs complex nested objects during a data processing task using `util.inspect` with custom options to ensure the output is readable and complete, and use the output to identify a data inconsistency.