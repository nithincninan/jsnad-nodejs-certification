# Child Processes Questions

## 1. Executing a Shell Command
Write a Node.js script that uses `child_process.exec` to run the "ls -la" command (or "dir" on Windows) and prints the output to the console. Handle any errors.

## 2. Spawning a Process
Use `child_process.spawn` to run a Node.js script (e.g., "script.js") that outputs "Hello" every second. Capture and print the output from the spawned process.

## 3. Forking a Child Process
Create a main script that forks a child process running "child.js". The child process should send a message back to the parent, and the parent should print it.

## 4. Inter-Process Communication
Write a script where a parent process forks a child process. The parent sends an array of numbers to the child, which calculates their sum and sends the result back to the parent for printing.

## 5. Killing a Child Process
Write a script that spawns a child process running a loop that prints numbers every second. After 5 seconds, the parent process should terminate the child process gracefully.