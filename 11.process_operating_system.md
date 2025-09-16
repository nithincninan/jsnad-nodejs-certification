# Process & Operating System Practice Questions

## 1. Exit with Status Code
Write a Node.js script that uses process.exit to terminate with a specific exit code based on the success or failure of a configuration validation task. Log the exit code and reason before termination.

## 2. System Information Display
Create a Node.js script that retrieves system information using process properties (e.g., process.version, process.arch, process.uptime) and formats it as a table. Handle cases where certain properties are unavailable.

## 3. Signal Handling
Develop a Node.js script that handles the SIGTERM signal using process.on to perform cleanup tasks (e.g., closing a file handle) before exiting gracefully.

## 4. Environment Variable Configuration
Write a Node.js script that uses process.env to configure a script's behavior based on a LOG_LEVEL environment variable. Provide a default level if the variable is unset and log messages accordingly.

## 5. System Metrics Collection
Create a Node.js script that uses the os module to collect system metrics (e.g., os.hostname, os.freemem, os.platform) and logs them in a JSON format. Handle platform-specific differences in output.

