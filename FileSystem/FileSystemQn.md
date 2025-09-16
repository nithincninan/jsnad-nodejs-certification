# File System Practice Questions

## 1. Read and Create Settings File
Write a Node.js script that uses fs.promises.readFile to read a settings.json file and parse its contents into an object. If the file is missing, create it with default settings using fs.promises.writeFile. Handle errors such as invalid JSON or lack of write permissions, logging descriptive messages.

## 2. Log User Activity
Create a Node.js function that logs user activity to a file (activity.log) using fs.promises.appendFile, adding a timestamp for each entry. Ensure the file is created if it doesn't exist and handle errors like disk full (ENOSPC) with a fallback to console logging.

## 3. Monitor Directory Changes
Develop a Node.js script that uses fs.watch to monitor a config directory for file changes. Log the event type (e.g., change, rename) and affected filename, handling errors if the directory is deleted during execution.

## 4. Copy Log Files
Write a Node.js script that copies all .log files from a source directory to a backup directory using fs.promises.readdir and fs.promises.copyFile. Handle errors like missing source files or destination permission issues, logging specific error messages.

## 5. Delete Temporary File
Create a Node.js script that deletes a temporary file (temp.txt) using fs.promises.unlink and verifies its deletion with fs.promises.access. Handle errors if the file doesn't exist or if deletion fails due to permissions, logging appropriate messages.