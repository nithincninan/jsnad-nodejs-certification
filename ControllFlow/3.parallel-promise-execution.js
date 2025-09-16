//3. Parallel Promise Execution
//Write a script that executes three async tasks (each returning a Promise that resolves after a random delay) in parallel using Promise.all.
//Print the results in the order they complete.


async function task1() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("From task 1")
        }, 2000)
        
    })
}

async function task2() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("From task 2")
        }, 1000)
    })
}

async function task3() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("From task 3")
        }, 7000)
    })
}

async function callAllTasks() {
 // Run tasks in parallel using Promise.all
        const tasks = [task1(), task2(), task3()];
        // Log results as they complete
        await Promise.all(tasks.map(async (task, index) => {
            const result = await task;
            console.log(`Result ${index + 1}: ${result}`);
        }));
        console.log("All tasks completed");
}

callAllTasks();

//Promise.allSettled()
//Promise.allSettled() is a method that returns a promise that resolves when all promises in the array have settled (either resolved or rejected).
//It is similar to Promise.all(), but it does not reject if any of the promises are rejected.
//It is useful when you want to wait for all promises to settle, regardless of whether they are resolved or rejected.

//Promise.race()
//This method resolves or rejects as soon as the first Promise settles, whether it resolves or rejects.
// Regardless of which promise settles first, all promises are fully executed.

//Promise.any()
//This method resolves as soon as any of the promises in the array resolves.
//If all promises reject, it rejects with an AggregateError.


//https://nodejs.org/en/learn/asynchronous-work/discover-promises-in-nodejs