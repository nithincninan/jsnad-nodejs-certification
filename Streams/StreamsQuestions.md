# Streams Questions

## 1. Readable Stream from File
Write a Node.js script that creates a readable stream from a text file named "input.txt" and pipes its content to the console. Handle any errors that occur during the process.

## 2. Writable Stream to File
Create a writable stream to a file named "output.txt". Write the string "Hello, Streams!" to it 5 times, each on a new line, and close the stream properly.

## 3. Transform Stream for Uppercase Conversion
Implement a Transform stream that converts all incoming text to uppercase. Pipe a readable stream from "input.txt" through this transform stream and into a writable stream to "output.txt".

## 4. Piping Multiple Streams
Write a script that reads from a file "data.txt" using a readable stream, pipes it through a transform stream that prepends each chunk with a timestamp, and writes the result to "timestamped.txt".

## 5. Handling Backpressure
Create a readable stream that generates numbers from 1 to 1000 and a writable stream that logs each number to the console. Implement proper backpressure handling to prevent overwhelming the writable stream.

