'use strict '

function parseCSV(input) {
  if (typeof input !== 'string') {
    throw new TypeError('Input must be a string')
  }

  return input
    .split(',')
    .map(item => item.trim())
    .filter(Boolean) // remove empty values
}

module.exports = { parseCSV }

//.split(',') → ["apple", " banana", " orange", " ", " mango"]
//.map(item => item.trim()) → ["apple", "banana", "orange", "", "mango"]
//.filter(Boolean) → ["apple", "banana", "orange", "mango"]