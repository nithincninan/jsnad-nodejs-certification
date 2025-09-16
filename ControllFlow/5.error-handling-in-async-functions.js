//5. Error Handling in Async Functions
//Implement a function that processes an array of numbers sequentially, where each number is passed to an async function that doubles it after a 1-second delay.
//Print each result as it completes.


async function mockApiCall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("API call succeeded");
      } else {
        reject(new Error("API call failed"));
      }
    }, 1000); // Simulate 1-second delay
  });
}

async function fetchWithRetry() {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      console.log(`Attempt ${attempt}`);
      const result = await mockApiCall();
      return result;
    } catch (error) {
      console.error(`Attempt ${attempt} failed: ${error.message}`);
      if (attempt === 3) {
        throw new Error("Failed after 3 attempts");
      }
    }
  }
}

// Example usage
(async () => {
  try {
    const result = await fetchWithRetry();
    console.log("Final result:", result);
  } catch (error) {
    console.error("Final error:", error.message);
  }
})();


console.log(' ');
console.log('========================= 2nd Example ======================');
console.log(' ');


// Mock API call that randomly resolves or rejects
function mockApiCallSuccessFailure() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("✅ Success!");
      } else {
        reject("❌ Failed!");
      }
    }, 500);
  });
}

// Function with retry logic
async function callWithRetry(retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const result = await mockApiCallSuccessFailure();
      console.log(`Attempt ${attempt}: ${result}`);
      return result;
    } catch (error) {
      console.log(`Attempt ${attempt}: ${error}`);
      if (attempt === retries) {
        throw new Error("Max retries reached. Giving up.");
      }
      console.log("Retrying...");
    }
  }
}

// Example usage
(async () => {
  try {
    const result = await callWithRetry(3);
    console.log("Final Result:", result);
  } catch (err) {
    console.error("Final Error:", err.message);
  }
})();