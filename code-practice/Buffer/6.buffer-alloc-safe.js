//Alter the code so that the buffer is safely allocated. Do not explicitly fill the buffer with anything. 
//If the process prints the buffer and then logs passed!

//Create a Buffer Safely

'use strict'
const assert = require('assert')
const buffer = Buffer.allocUnsafe(4096)
console.log(buffer)

for (const byte of buffer) assert.equal(byte, 0)
console.log('passed!')


//ansswer
//const buffer = Buffer.alloc(4096)