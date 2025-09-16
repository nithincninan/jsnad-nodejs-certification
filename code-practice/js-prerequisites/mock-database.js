function getUserFromDB(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userId === 1) {
          resolve({ id: 1, name: "Alice" });
        } else {
          reject(new Error(`User with ID ${userId} not found in DB`));
        }
      }, 500);
    });
  }
  
  function getOrdersForUser(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user.id === 1) {
          resolve([
            { orderId: 101, amount: 250 },
            { orderId: 102, amount: 100 }
          ]);
        } else {
          reject(new Error(`Orders not found for user ${user.name}`));
        }
      }, 500);
    });
  }
  
  function processOrders(orders) {
    return new Promise((resolve) => {
      const total = orders.reduce((sum, order) => sum + order.amount, 0);
      resolve({ total, count: orders.length });
    });
  }
  
  module.exports = { getUserFromDB, getOrdersForUser, processOrders };