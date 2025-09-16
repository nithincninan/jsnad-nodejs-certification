//4. Piping Multiple Streams
//Write a script that reads from a file "data.txt" using a readable stream, pipes it through a transform stream that prepends each chunk with a timestamp, and writes the result to "timestamped.txt".


const fs = require('fs')
const {Transform} = require('stream');

const readStream = fs.createReadStream('data.txt',{'HighWaterMark': 1})

const writeStream = fs.createWriteStream('timestamped.txt')

const transform = new Transform({
    transform(chunk, encoding, callback) {
        console.log('transform ==> start');
        console.log('chunk.toString() ==> ', chunk.toString().toUpperCase());
        const data = chunk.toString() + `Timestamp: ${new Date().toISOString()}`;
        this.push(data);
        callback();
    }
})

readStream.pipe(transform).pipe(writeStream);