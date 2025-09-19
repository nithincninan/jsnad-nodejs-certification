//7. Process stdin and stdout
//Write a Node.js script that uses process.stdin and process.stdout to read from the standard input 
//and write to the standard output.

"use strict";

const process = require("process");
const { Transform, pipeline } = require("stream");

process.stdout.write("init");

const transform = new Transform({
  transform: (chunk, encoding, next) => {
    const upperChunk = chunk.toString().toUpperCase();
    next(null, upperChunk);
  },
  encoding: "utf-8",
});

pipeline(process.stdin, transform, process.stdout, (err) => console.log(err));

//OUTPUT:
//--------------------------------
//init
//--------------------------------

//IMP:
//process.stdin is a readable stream that reads from the standard input.
//process.stdout is a writable stream that writes to the standard output.
//pipeline is a function that pipes the input stream to the transform stream and then to the output stream.