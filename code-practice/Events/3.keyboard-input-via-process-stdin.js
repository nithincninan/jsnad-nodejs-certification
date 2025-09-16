const EventEmitter = require('events');
const process = require('process');

class KeyEmitter extends EventEmitter {}
const keyEmitter = new KeyEmitter();

// Listener for keyPressed
keyEmitter.on('keyPressed', (key) => {
    console.log('Key pressed:', key);
});

// Enable raw mode so we get control over Ctrl+C
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', (key) => {
    const keyString = key.toString().trim();

    // Emit custom event
    keyEmitter.emit('keyPressed', keyString);

    // Handle Ctrl+C (Unicode codepoint \u0003)
    if (key === '\u0003') {
        console.log('Exiting process...');
        process.exit();
    }
});
