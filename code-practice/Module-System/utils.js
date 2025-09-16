'use strict'

// Capitalize the first letter of a string
function capitalize(str) {
  if (typeof str !== 'string') throw new TypeError('Input must be a string')
  if (str.length === 0) return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}

// Reverse a string
function reverse(str) {
  if (typeof str !== 'string') throw new TypeError('Input must be a string')
  return str.split('').reverse().join('')
}

module.exports = { capitalize, reverse }

//IMP
//str.chartAt(0).toUpperCase()+str.slice(1)
//str.split('').reverse().join('')
//module.exports = { capitalize, reverse }