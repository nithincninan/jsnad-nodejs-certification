const { execSync } = require('child_process');

try {
  // Run index.js and capture output
  const output = execSync('node index.js').toString().trim();

  if (output === '42') {
    console.log("passed!");
  } else {
    console.error("failed! got:", output);
    process.exit(1);
  }
} catch (err) {
  console.error("failed with error:", err.message);
  process.exit(1);
}
