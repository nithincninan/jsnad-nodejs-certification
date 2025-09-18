//Using any of the approaches described create a prototypal inheritance chain and then create an instance from that chain, and assign it to felix such that:

//The prototype of felix should be an object with a meow method
//The prototype of that object should be an object with a purr method
//The prototype of that object should be an object with a hiss method
//When ready, open a terminal, navigate to the labs-2 folder and run your implementation with node app.js. This program will not run correctly, it will throw exceptions, until the implementation is complete. If correctly implemented app.js should output: prototype checks passed!:

//It's not necessary for meow, purr and hiss methods console.log exactly the same output, or even to output anything at all. 
//Making Felix meow, purr and hiss is a nice-to-have. The most important thing is that the prototype chain is correctly set up.


const assert = require('assert')
// TODO:
// implement a way to create a prototype chain
// of leopard -> lynx -> cat
// leopard prototype must have ONLY a hiss method
// lynx prototype must have ONLY a purr method
// cat prototype must have ONLY a meow method
const felix = null //TODO replace null with instantiation of a cat
felix.meow() // prints Felix the cat: meow
felix.purr() // prints Felix the cat: prrr
felix.hiss() // prints Felix the cat: hsss
// prototype checks, do not remove
const felixProto = Object.getPrototypeOf(felix)
const felixProtoProto = Object.getPrototypeOf(felixProto)
const felixProtoProtoProto = Object.getPrototypeOf(felixProtoProto)
assert(Object.getOwnPropertyNames(felixProto).length, 1)
assert(Object.getOwnPropertyNames(felixProtoProto).length, 1)
assert(Object.getOwnPropertyNames(felixProtoProto).length, 1)
assert(typeof felixProto.meow, 'function')
assert(typeof felixProtoProto.purr, 'function')
assert(typeof felixProtoProtoProto.hiss, 'function')
console.log('prototype checks passed!')