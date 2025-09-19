//8. Process stdin and stdout
//Write a Node.js script that uses process.stdin and process.stdout to read from the standard input 
//and write to the standard output.

"use strict";

'use strict'
console.log('initialized')
const { Transform } = require('stream')
const createUppercaseStream = () => {
  return new Transform({
    transform (chunk, enc, next) {
      const uppercased = chunk.toString().toUpperCase()
      next(null, uppercased)
    }
  })
}

const uppercase = createUppercaseStream()

process.stdin.pipe(uppercase).pipe(process.stdout)

//OUTPUT:
//--------------------------------
//initialized
//
//nithin
//NITHIN
//--------------------------------

//IMP:
//process.stdin is a readable stream that reads from the standard input.
//process.stdout is a writable stream that writes to the standard output.
//pipe is a function that pipes the input stream to the transform stream and then to the output stream.
//next: A function to call when the chunk is processed.
//next(null, upperChunk): The chunk is processed and the upperChunk is written to the output (stdout).