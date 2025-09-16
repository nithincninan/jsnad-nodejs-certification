const {Readable, Writable} = require('stream');

const readStream = new Readable({
    read(size) {
        this.push('Hello, world!\n');
        this.push('Hello, world!\n');
        this.push('Hello, world!\n');
        this.push(null);
    }
})

const writeStream = new Writable({
    write(chunk, encoding, callback) {
        console.log(chunk.toString());
        callback();
    }
})

readStream.pipe(writeStream);

writeStream.on('data', (chunk) => {
    if
}
);