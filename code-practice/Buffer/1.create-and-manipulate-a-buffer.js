//1. Create and Manipulate a Buffer
//Write a Node.js function that creates a Buffer from the string "Hello, Node.js!" 
//and converts it to both a hexadecimal string and a base64 string. Print both results to the console.


//The Buffer module in Node.js is used to handle binary data.
//Buffers are similar to arrays of integers 

function createAndManipulateBuffer() {
    const buffer = Buffer.from("Hello, Node.js!");
    const hexString = buffer.toString("hex"); // IMP
    const base64String = buffer.toString("base64"); // IMP

    console.log("Hexadecimal String:", hexString);
    console.log("Base64 String:", base64String);
}

createAndManipulateBuffer();