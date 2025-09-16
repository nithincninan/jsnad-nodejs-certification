//3. Export Shared Cache Module
//Develop a Node.js script that imports a CommonJS module (cache.js) to store and retrieve data in a shared object. Demonstrate how the module's state is preserved across multiple require calls in different scripts.

'use strict'

const cache = require('./cache')

console.log('--- Script1 ---')
cache.set('name', 'Alice')
cache.set('role', 'Developer')

console.log('Script1 cache:', cache.getAll())

//Output:
//node 3.module-export-shared-cache-module.js
//--- Script1 ---
//Script1 cache: { name: 'Alice', role: 'Developer' }
