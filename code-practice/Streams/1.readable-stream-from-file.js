//1. Readable Stream from File
//Write a Node.js script that creates a readable stream from a text file named "input.txt" and pipes its content to the console. Handle any errors that occur during the process.

//Streams - Streams are a way to handle data piece by piece (chunks) instead of loading it all into memory at once.
//Streams - Collections of data, which might not be available in full at once and don't have to fit in memory.

//Types of Streams
//Readable - Streams from which data can be read.
//Writable - Streams to which data can be written.
//Duplex - Streams that are both readable and writable.
//Transform - Streams that can modify the data as it is written and read.


const fs = require('fs');

// Create a readable stream
var rs = fs.createReadStream('input.txt');

// Pipe the stream to the console
//pipe() connects streams (readable → writable).
//process.stdout is a writable stream that prints to your terminal.
rs.pipe(process.stdout);

//or

//rs.on('data', (chunk) {
//    console.log(`Received ${chunk.length} bytes of data.`);
//    console.log(chunk.toString());
//});

// Handle end of stream
rs.on('end', () => {
    console.log('No more data to read.');
  });

// Handle errors
rs.on('error', function(err) {
    console.log('Error reading file:', err.message);
});