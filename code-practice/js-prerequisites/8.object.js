//Object

//fn is an arrow function, and arrow functions do not have their own this. So, this.a is undefined.
const arrow = {
  a: 2,
  fn: () => {
    console.log(this.a + 2);
  },
};

//fn is a regular function, and regular functions have their own this. So, this.id is 999.
const funct = {
  id: 999,
  fn: function () {
    console.log(this.id);
  },
};
console.log("Arrow", arrow.fn());
console.log("Funct", funct.fn());

function fn() {
  console.log(this.id);
}
const obj = { id: 999 };
const obj2 = { id: 2 };
fn.call(obj2); // prints 2
fn.call(obj); // prints 999
fn.call({ id: ":)" }); // prints :)

function fn() {
  return (offset) => {
    console.log(this.id + offset);
  };
}
const objArrow = { id: 999 };
const offsetter = fn.call(objArrow);
offsetter(1); // prints 1000 (999 + 1)

function normalFunction() {}
const fatArrowFunction = () => {};
console.log(typeof normalFunction.prototype); // prints 'object'
console.log(typeof fatArrowFunction.prototype); // prints 'undefined'

//Output:
//--------------------------------
//NaN
//Arrow undefined
//999
//Funct undefined
//1000
//object
//undefined
//--------------------------------