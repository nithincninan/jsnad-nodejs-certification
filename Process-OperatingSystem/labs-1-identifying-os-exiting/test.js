//Lab 7.1 - Identifying OS Exiting

// In index.js use console.log to output the operating system identifier. 
// Ensure the process exits with a non-zero exit code.
// Run node test.js to verify whether the task was successfully completed, 
// if it was node test.js will output passed!.

'use strict'
const { spawnSync } = require('child_process')
const assert = require('assert')
const { status, stdout } = spawnSync(process.argv[0], [__dirname])

assert.notStrictEqual(status, 0, 'must exit with a non-zero code')
assert.match(
  stdout.toString(),
  /^(d|w|l|aix|.+bsd|sunos|gnu)/i,
  'must output OS identifier'
) 

console.log('passed!')