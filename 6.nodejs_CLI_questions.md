# Node.js CLI Questions

## 1. Parse a --file argument
Write a Node.js script that accepts a `--file` command-line argument from `process.argv` to specify a file to process, defaulting to a predefined file if not provided (example: `node script.js --file=data.txt`).

## 2. HTTP server with header-size limit
Create a Node.js HTTP server that uses the `--max-http-header-size=4096` flag to set the header size limit to 4KB, also accepting a `--port` argument (default `8080`) and logging the server configuration on startup.

## 3. Heap size restriction
Develop a Node.js script that allocates a large array and may exceed memory limits, and run it with `--max-old-space-size=100` to restrict heap size to 100MB while handling any resulting crashes with a graceful error message.

## 4. Preload a logging module
Write a Node.js script that depends on a logging module and use the `--require` flag to preload the module, demonstrating its effect by logging initialization details before the main script runs.

## 5. Strict unhandled rejections
Create a Node.js script with an async function that may produce unhandled promise rejections, run it with `--unhandled-rejections=strict` to enforce strict handling, and modify the script to catch all rejections properly.


