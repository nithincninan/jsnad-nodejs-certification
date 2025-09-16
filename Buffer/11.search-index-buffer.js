const buf = Buffer.from('Hello, Node.js is awesome!');

// Find the first occurrence of a value
console.log(buf.indexOf('Node')); // 7

// Check if buffer contains a value
console.log(buf.includes('awesome')); // true

// Find the last occurrence of a value
console.log(buf.lastIndexOf('o')); // 24
