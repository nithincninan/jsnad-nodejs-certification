//3. Transform stream for uppercase conversion
//Implement a Transform stream that converts all incoming text to uppercase. Pipe a readable stream from "input.txt" through this transform stream and into a writable stream to "output.txt".


const fs = require('fs');
const {Transform} = require('stream');

const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('upper-case.txt');

const transform = new Transform({
    transform(chunk, encoding, callback) {
        var upperCase = chunk.toString().toUpperCase();
        this.push(upperCase);
        callback()
    },
});

readStream.pipe(transform).pipe(writeStream);

readStream.on('error', (err) => {
    console.error('Error reading File', err);
});

readStream.on('end', () => {
    console.log('Reading Completed');
});

writeStream.on('finish', () => {
    console.log('File has been written');
});

writeStream.on('error', (err) => {
    console.error('Error writing file:', err);
});

writeStream.on('close', () => {
    console.log('Writing completed');
});
