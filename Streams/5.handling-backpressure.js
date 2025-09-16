const { Readable, Writable } = require('stream');

// Create a readable stream to generate numbers from 1 to 1000
const readStream = new Readable({
  read(size) {
    if (this.currentNumber <= 100) {
      this.push(this.currentNumber.toString() + '\n');
      this.currentNumber++;
    } else {
      this.push(null);
    }
  }
});
readStream.currentNumber = 1;

// Create a writable stream that logs numbers with a delay
const writeStream = new Writable({
  write(chunk, encoding, callback) {
    setTimeout(() => {
      console.log(chunk.toString().trim());
      callback();
    }, 10);
  },
  highWaterMark: 10 // Low buffer size to trigger backpressure
});

// Pipe with manual backpressure handling
readStream.on('data', (chunk) => {
  if (!writeStream.write(chunk)) {
    readStream.pause(); // Pause if buffer is full
    writeStream.once('drain', () => readStream.resume()); // Resume on drain
  }
});

readStream.on('end', () => console.log('All numbers generated'));
writeStream.on('finish', () => console.log('All numbers logged'));
readStream.on('error', (err) => console.error('Read error:', err.message));
writeStream.on('error', (err) => console.error('Write error:', err.message));