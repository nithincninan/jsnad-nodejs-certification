//Create a JavaScript function that performs a deep copy of an object using recursion, supporting nested objects and arrays. Ensure it handles edge cases like null, circular references, or non-object inputs.

function deepCopy(value, seen = new WeakMap()) {
  // Handle null or primitive types (string, number, boolean, symbol, bigint, undefined)
  if (value === null || typeof value !== "object") {
    return value;
  }

  // Handle circular references
  if (seen.has(value)) {
    return seen.get(value);
  }

  let copy;

  // Handle arrays
  if (Array.isArray(value)) {
    copy = [];
    seen.set(value, copy);
    for (let i = 0; i < value.length; i++) {
      copy[i] = deepCopy(value[i], seen);
    }
    return copy;
  }

  // Handle plain objects
  copy = {};
  seen.set(value, copy);
  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      copy[key] = deepCopy(value[key], seen);
    }
  }

  return copy;
}

// ✅ Example usage:

const obj = {
  a: 1,
  b: {
    c: 2,
    d: [3, 4, { e: 5 }]
  }
};

// Circular reference test
obj.self = obj;

const cloned = deepCopy(obj);

console.log(cloned);
console.log(cloned.b.d[2].e); // 5
console.log(cloned !== obj); // true
console.log(cloned.b !== obj.b); // true
console.log(cloned.self === cloned); // true (circular reference preserved)
