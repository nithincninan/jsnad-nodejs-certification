
//Create two Buffers containing the strings "Node" and "JS". 
//Write a function to concatenate these Buffers and 
//convert the result to a UTF-8 string. Output the final string.

const buffer1 = Buffer.from("Hello ");
const buffer2 = Buffer.from("Node.js");

const buffer3 = Buffer.concat([buffer1, buffer2]); // IMP

console.log("Concatenated Buffer:", buffer3);
console.log("Concatenated Buffer (utf8):", buffer3.toString("utf8"));

//console.log("Concatenated Buffer (Hex):", buffer3.toString("hex"));
//console.log("Concatenated Buffer (Base64):", buffer3.toString("base64"));

