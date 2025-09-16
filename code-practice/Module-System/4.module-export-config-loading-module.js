//4. Export Config Loading Module
//Write a Node.js module (settings.js) that uses require to load a JSON configuration file and exports its contents. Handle cases where the file is missing or malformed, falling back to a default configuration object.

'use strict'

const settings = require('./settings')

console.log('Loaded settings:', settings)

//Output:
//node 4.module-export-config-loading-module.js
//Loaded settings: { theme: 'dark', language: 'en', notifications: false }

//⚠ settings.json not found. Using defaults.