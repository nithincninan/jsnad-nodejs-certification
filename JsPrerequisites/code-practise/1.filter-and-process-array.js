//Filter-and-process-array
//Write a JavaScript function that processes an array of mixed data types (e.g., numbers, strings, null) using a for loop and typeof to filter out non-numeric values. 
//Return the product of the remaining numbers, handling edge cases like empty arrays or NaN.

function productOfNumbers(arr) {

  // If input is not an array, return NaN
  if (!Array.isArray(arr)) {
    return NaN;
  }

  let product = 1;
  let hasNumber = false;

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (typeof item === 'number' && !isNaN(item)) {
      product *= item;
      hasNumber = true;
    }
  }

  // Handle edge cases
  if (!hasNumber) {
    return 0; // return 0 if no valid numbers found
  }

  return product;
}

// Example usage:
console.log(productOfNumbers([2, "hello", null, 3, 4])); // 24
console.log(productOfNumbers([null, "abc", NaN]));       // 0
console.log(productOfNumbers([]));                       // 0
console.log(productOfNumbers([5, NaN, 2]));              // 10
console.log(productOfNumbers('hello'));                  // NaN


//Feature	         let	                         const
//Scope	           Block-scoped	                 Block-scoped
//Reassignment	   ✅ Allowed	                 ❌ Not allowed
//Redeclaration	   ❌ Not allowed	             ❌ Not allowed
//Use case	       When the value may change	   When the value should stay constant (but object/array contents can still change!)

//Scope:
//{
//  let a = 1;
//  const b = 2;
//  console.log(a, b); // 1 2
//}
//console.log(a, b); // ❌ ReferenceError (both are block-scop

//Reassignment:
//let a = 1;
//a = 2;
//console.log(a); // 2

//const b = 2;
//b = 3; // ❌ TypeError: Assignment to constant variable.