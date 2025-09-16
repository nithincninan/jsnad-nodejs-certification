//5. Buffer Allocation and Writing
//Create an empty Buffer of size 10. Write the string "Node.js" into it starting at index 2. Print the Buffer's content as a string and its length.

const myBuffer = Buffer.alloc(10);

myBuffer.write('Node.js is awesome and amazing', 2)

console.log(myBuffer);
console.log(myBuffer.length);
console.log(myBuffer.toString()); // 6
