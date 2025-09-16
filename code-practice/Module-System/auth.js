'use strict'

// Simple mock database of users
const users = {
  alice: 'password123',
  bob: 'qwerty',
  charlie: 'letmein'
}

function validateCredentials(username, password) {
  if (typeof username !== 'string' || typeof password !== 'string') {
    throw new TypeError('Username and password must be strings')
  }

  if (!users[username]) {
    throw new Error('User not found')
  }

  if (users[username] !== password) {
    throw new Error('Invalid password')
  }

  return true
}

module.exports = { validateCredentials }

//IMP
//typeof --> TypeError
//throw new ERROR()
//modeule.exports = {}
