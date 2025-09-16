//1. Async/Await with Promises
//Write an async function that fetches data from two mock APIs (simulated with setTimeout returning Promises). Combine the results and return them as an object. Handle errors using try/catch.

async function callCustomerAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({'customId': ['1', '2', '3']});
        }, 1000);
    })
}

async function callUserAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({'userId': ['4', '5', '6']});
        }, 2000);
    })
}

async function callAPIs() {
    const [customerData, userData] = await Promise.all([callCustomerAPI(), callUserAPI()]);

    const combined =  {
      user: customerData,
      posts: userData
    };

    console.log('Both API called');
    console.log(combined);
}

callAPIs()

console.log(' ');
console.log('========================= 2nd Example ======================');
console.log(' ');

// Mock API 1
function fetchFromApi1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data: 'Data from API 1' });
      }, 1000);
    });
  }
  
  // Mock API 2
  function fetchFromApi2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data: 'Data from API 2' });
      }, 1500);
    });
  }
  
  // Async function to fetch both and combine results
  async function fetchDataFromBothApis() {
    try {
      const [api1Result, api2Result] = await Promise.all([
        fetchFromApi1(),
        fetchFromApi2()
      ]);
  
      return {
        api1: api1Result.data,
        api2: api2Result.data
      };
    } catch (error) {
        console.error('Error fetching data:', error.message);
        throw error; // rethrow if needed
    }
  }
  
  // Example usage
  fetchDataFromBothApis()
    .then(result => console.log('Combined result:', result))
    .catch(err => console.error('Final error handler:', err));
  
  //setTimeout is a function that delays the execution of a function for a specified time. It is a synchronous function.
  //setInterval is a function that calls a function repeatedly after a specified time. It is a synchronous function.
  //setImmediate is a function that calls a function immediately after the current event loop iteration. It is a synchronous function.
  //https://nodejs.org/en/learn/asynchronous-work/discover-javascript-timers#settimeout
