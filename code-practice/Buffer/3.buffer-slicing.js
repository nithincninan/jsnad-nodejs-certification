//3. Buffer Slicing
//Write a Node.js function that creates a Buffer from the string "JavaScript" and slices it from index 2 to 7. Print both the original and sliced buffers.

const myBuffer = Buffer.from("JavaScript");

const slicedBuffer = myBuffer.slice(2, 7); // IMP
const slicedBuffer1 = myBuffer.slice(2);

console.log("Original Buffer:", myBuffer.toString());
console.log("Sliced Buffer:", slicedBuffer.toString());
console.log("Sliced Buffer:", slicedBuffer1.toString());
