const source = Buffer.from('Hello, World!');
const target = Buffer.alloc(source.length);

// Copy from source to target
source.copy(target);

console.log(target.toString());

// Create a target buffer for partial copy
const partialTarget = Buffer.alloc(5);

// Copy only part of the source (starting at index 7)
source.copy(partialTarget, 0, 7);

console.log(partialTarget.toString());

              