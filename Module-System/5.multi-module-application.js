//5. Multi-Module Application
//Create a Node.js application that imports two CommonJS modules: one for data parsing and one for logging. Use them in a main script to process a dataset and log results, ensuring proper module organization and error handling.

'use strict'

const { parseCSV } = require('./dataParser')
const logger = require('./logger')

// Example dataset (this could come from a file, API, or user input)
const dataset = "apple, banana, orange, , mango"

try {
  logger.info('Starting dataset processing...')

  const items = parseCSV(dataset)

  if (items.length === 0) {
    logger.warn('Dataset is empty after parsing.')
  } else {
    logger.info(`Parsed ${items.length} items successfully.`)
    logger.info(`Items: ${items.join(' | ')}`)
  }

  logger.info('Processing complete.')
} catch (err) {
  logger.error(`Failed to process dataset: ${err.message}`)
}

//Output:
//node 5.multi-module-application.js
//ℹ️  INFO: Starting dataset processing...
//ℹ️  INFO: Parsed 4 items successfully.
//ℹ️  INFO: Items: apple | banana | orange | mango
//ℹ️  INFO: Processing complete.

//IMP:
//items.join(' | ') → "apple | banana | orange | mango"
//.join(' | ') ==> Take the array items, merge elements into one string, and separate them with |