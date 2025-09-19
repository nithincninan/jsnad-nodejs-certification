//Constructor Function
//Create a JavaScript constructor function that models a Fruit, where the Fruit class has a constructor that takes a color, taste, and seeds. 
//Create an instance of the Fruit class and display the color.


function Fruit(color, taste, seeds) {
  this.color = color;
  this.taste = taste;
  this.seeds = seeds;
}

// Create an object
const fruit1 = new Fruit("Yellow", "Sweet", 1);

// Display the result
console.log(fruit1.color);

//Output:
//--------------------------------
//Yellow
//--------------------------------