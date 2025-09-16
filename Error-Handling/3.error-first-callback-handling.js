//3.error-first-callback-handling.js
//Develop a Node.js function that uses the callback-based fs.readFile to load a JSON file, 
//handling SyntaxError for invalid JSON and missing files, with proper error logging and a sensible fallback behavior.

const fs = require("fs");

function loadJsonFile(filePath, callback) {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        console.error(`❌ File not found: ${filePath}`);
        return callback(null, {}); // fallback: empty object
      }
      console.error(`❌ Unexpected read error:`, err);
      return callback(err, {}); // pass the error to caller
    }

    try {
      const parsed = JSON.parse(data);
      return callback(null, parsed);
    } catch (parseErr) {
      if (parseErr instanceof SyntaxError) {
        console.error(`❌ Invalid JSON in file: ${filePath}`);
        return callback(null, {}); // fallback: empty object
      }
      console.error(`❌ Unexpected parse error:`, parseErr);
      return callback(parseErr, {});
    }
  });
}

// --- Example usage ---
loadJsonFile("config.json", (err, config) => {
  if (err) {
    console.error("Failed to load config:", err.message);
  } else {
    console.log("✅ Config loaded:", config);
  }
});



