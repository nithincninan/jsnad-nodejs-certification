//4.handling-unhandled-promise-rejections.js
//Write a Node.js script that chains promises to fetch data from a mock database and process it, 
//and use `process.on('unhandledRejection')` to catch unhandled promise rejections and log detailed error information including the rejection reason.
const { getUserFromDB, getOrdersForUser, processOrders } = require("./mock-database");

// Catch all unhandled promise rejections globally
process.on("unhandledRejection", (reason, promise) => {
  console.error("⚠️ Unhandled Promise Rejection detected!");
  console.error("Reason:", reason.message || reason);
  console.error("Promise:", promise);
  process.exit(1); // optional: exit to avoid unstable state
});

// Chain promises
getUserFromDB(2)  // Intentionally using a bad ID to trigger rejection
  .then(user => {
    console.log("✅ User fetched:", user);
    return getOrdersForUser(user);
  })
  .then(orders => {
    console.log("✅ Orders fetched:", orders);
    return processOrders(orders);
  })
  .then(result => {
    console.log("✅ Orders processed:", result);
  });

// Note: no `.catch()` is used here, so unhandled rejection will be caught globally