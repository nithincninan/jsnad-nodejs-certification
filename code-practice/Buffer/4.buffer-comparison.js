//4. Buffer Comparison
//Write a Node.js script that creates two Buffers from the strings "test" and "Test". 
//Compare the Buffers and print whether they are equal. Then, convert both to lowercase and compare again.

const myBuffer = Buffer.from("test 123");
const myBuffer2 = Buffer.from("test 123");

console.log(myBuffer.toString("base64"));
console.log(myBuffer2.toString("base64"));

console.log(myBuffer.compare(myBuffer2));
// 0 if the buffers are equal, 
// 1 if the first buffer is greater,
// -1 if the second buffer is greater

console.log(' ');
console.log('========================= 2nd Example======================');
console.log(' ');

// Create two Buffers
const buf1 = Buffer.from("test", "utf8");
const buf2 = Buffer.from("Test", "utf8");

// Compare Buffers directly
const areEqual = Buffer.compare(buf1, buf2) === 0;
console.log(`Are buffers equal? ${areEqual}`);

// Convert both to lowercase
const buf1Lower = Buffer.from(buf1.toString().toLowerCase(), "utf8");
const buf2Lower = Buffer.from(buf2.toString().toLowerCase(), "utf8");

// Compare again
const areEqualLower = Buffer.compare(buf1Lower, buf2Lower) === 0;
console.log(`Are buffers equal after lowercase conversion? ${areEqualLower}`);
