//By default, the labs-1 folder is set up as a CJS project, but if desired, the package.json can be modified to convert to an ESM module
// (by either setting the type field to module or renaming index.js to index.mjs and setting the type field accordingly). 
// The exercise can be completed either with the default CJS or with ESM or both.


//"type": "module", in package.json

'use strict'

// Export the function (ESM style)
export function add(a, b) {
  return a + b
}
