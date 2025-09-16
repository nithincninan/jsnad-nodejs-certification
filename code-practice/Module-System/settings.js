'use strict'

const path = require('path')

// Default configuration
const defaultConfig = {
  theme: 'light',
  language: 'en',
  notifications: true
}

let config

try {
  // Try loading settings.json (synchronously)
  config = require(path.join(__dirname, 'settings.json'))
  if (typeof config !== 'object' || config === null) {
    console.warn('⚠ settings.json is not a valid object. Using defaults.')
    config = defaultConfig
  }
} catch (err) {
  if (err.code === 'MODULE_NOT_FOUND') {
    console.warn('⚠ settings.json not found. Using defaults.')
  } else if (err instanceof SyntaxError) {
    console.error('⚠ Invalid JSON format in settings.json. Using defaults.')
  } else {
    console.error('⚠ Unexpected error while loading settings.json:', err.message)
  }
  config = defaultConfig
}

module.exports = config

//IMP
//config = require(path.join(__dirname, 'settings.json'))


