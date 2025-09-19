//7. Process stdin and stdout | pipeline stream | transform stream
//Write a Node.js script that uses process.stdin and process.stdout to read from the standard input 
//and write to the standard output.

"use strict";

const process = require("process");
const { Transform, pipeline } = require("stream");

process.stdout.write("init");

const transform = new Transform({
  transform: (chunk, encoding, callback) => {
    const upperChunk = chunk.toString().toUpperCase();
    callback(null, upperChunk);
  },
  encoding: "utf-8",
});

pipeline(process.stdin, transform, process.stdout, (err) => console.log(err));

//OUTPUT:
//--------------------------------
//init
//
//nithin
//NITHIN
//--------------------------------

//IMP:
//process.stdin is a readable stream that reads from the standard input.
//process.stdout is a writable stream that writes to the standard output.
//pipeline is a function that pipes the input stream to the transform stream and then to the output stream.
//transform:The transform function is called every time a chunk of data is received from the input (stdin):
//chunk: The chunk of data received from the input.
//callback: A function to call when the chunk is processed.
//callback(null, upperChunk): The chunk is processed and the upperChunk is written to the output (stdout).