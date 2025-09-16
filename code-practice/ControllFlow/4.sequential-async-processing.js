//4. Sequential Async Processing
//Implement a function that processes an array of numbers sequentially, where each number is passed to an async function that doubles it after a 1-second delay.
//Print each result as it completes.


async function Double(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(number * 2);
        }, 1000)
    })
}

async function processArray(myArray) {
    for (const num of myArray) {
        const result = await Double(num)
        console.log(`Double of ${num} is ${result}`);
    }
}

const myArray = [1, 2, 3, 4, 5];
processArray(myArray) 

console.log(' ');
console.log('========================= 2nd Example ======================');
console.log(' ');

// Async function that doubles a number after 1 second
function asyncDouble(num) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(num * 2);
      }, 1000);
    });
  }
  
  // Sequential processor
  async function processSequentially(numbers) {
    for (const num of numbers) {
      const result = await asyncDouble(num);
      console.log(`Processed: ${result}`);
    }
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4, 5];
  processSequentially(numbers);