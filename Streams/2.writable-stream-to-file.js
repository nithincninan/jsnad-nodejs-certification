//2. Writable Stream to File
//Create a writable stream to a file named "output.txt". Write the string "Hello, Streams!" to it 5 times, each on a new line, and close the stream properly.

const fs = require('fs');

const ws = fs.createWriteStream('output.txt');

for (let i = 0; i < 5; i++) {
    ws.write('Hello, Streams! \n');
}
ws.end();

ws.on('finish', () => {
    console.log('File has been written');
});

ws.on('error', (err) => {
    console.error('Error writing file:', err);
})