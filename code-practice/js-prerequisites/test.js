
function fn() {
  return (offset) => {
    console.log(this.id + offset);
  };
}
const objArrow = { id: 999 };
const offsetter = fn.call(objArrow);
offsetter(1); // prints 1000 (999 + 1)

//Output:
//--------------------------------
//1000
//--------------------------------