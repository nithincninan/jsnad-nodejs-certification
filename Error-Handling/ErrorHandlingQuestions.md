# Error Handling Questions

## 1. Merge configuration files with async I/O
Write an async Node.js function that reads two configuration files using `fs.promises.readFile` and merges their contents, handling errors with `try/catch` and logging specific messages for `ENOENT` (file not found) and `EACCES` (permission denied).

## 2. Validating user input
Create a Node.js script that validates user input for a registration form by defining a custom `ValidationError` and throwing it for invalid inputs (e.g., missing email), then use `try/catch` to show a user‑friendly message.

## 3. Error-first callback handling
Develop a Node.js function that uses the callback-based `fs.readFile` to load a JSON file, handling `SyntaxError` for invalid JSON and missing files, with proper error logging and a sensible fallback behavior.

## 4. Handling unhandled promise rejections
Write a Node.js script that chains promises to fetch data from a mock database and process it, and use `process.on('unhandledRejection')` to catch unhandled promise rejections and log detailed error information including the rejection reason.

## 5. Express.js error middleware
Create an Express.js application with a route that queries a database and may throw errors (e.g., connection failure), implementing centralized error-handling middleware to catch errors, log them, and return appropriate HTTP status codes (e.g., 500).