//10. promise-error-handling.js
//Write a Node.js script that uses a Promise to simulate an error, and handle it with a catch block to log the error message.

Promise.reject(new Error("Error")).then(() => console.log("never occur"));
console.log("never occur");

//Output:
//--------------------------------
//Error: Error
//--------------------------------

//IMP :
// .reject() : It is a method of the Promise class. Rejects the promise.
// .then() : It is a method of the Promise class. Handles the promise.
// .catch() : It is a method of the Promise class. Catches the promise.