//2. Export Validate
//Create a Node.js module (auth.js) that exports a function to validate user credentials. Import it into a main script and demonstrate its use with different test cases, ensuring proper error handling for invalid credentials.
'use strict'

const { validateCredentials } = require('./auth')

// Test cases
const tests = [
  { username: 'alice', password: 'password123' }, // ✅ valid
  { username: 'bob', password: 'wrongpass' },     // ❌ wrong password
  { username: 'unknown', password: '1234' },      // ❌ user not found
  { username: 42, password: 'test' }              // ❌ invalid input type
]

for (const test of tests) {
  try {
    const result = validateCredentials(test.username, test.password)
    console.log(`✔ Success: ${test.username} authenticated`)
  } catch (err) {
    console.error(`✘ Failed: ${test.username} → ${err.message}`)
  }
}

//Output:
//node 2.module-export-validate-authenticate.js
//✔ Success: alice authenticated
//✘ Failed: bob → Invalid password
//✘ Failed: unknown → User not found
//✘ Failed: 42 → Username and password must be strings

//IMP
//for (const test of tests) { }
