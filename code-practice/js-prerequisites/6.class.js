//Class

//Create a JavaScript class that models a Wolf and a Dog, where the Dog extends the Wolf class. 
//The Dog class should have a constructor that takes a name and calls the super constructor with the name + " the dog". 
//The Dog class should also have a woof method that logs the name and "woof" to the console. 
//The Wolf class should have a howl method that logs the name and "awoooooooo" to the console. 
//Create an instance of the Dog class and call the woof and howl methods.

class Wolf {
  constructor(name) {
    this.name = name;
  }
  howl() {
    console.log(this.name + ": awoooooooo");
  }
}

class Dog extends Wolf {
  //The constructor method in each class is the equivalent to the function body of a Constructor Function.
  constructor(name) {
    super(name + " the dog");
  }
  woof() {
    console.log(this.name + ": woof");
  }
}

const rufus = new Dog("Rufus");

rufus.woof(); // prints "Rufus the dog: woof"
rufus.howl(); // prints "Rufus the dog: awoooooooo"

console.log(Object.getPrototypeOf(rufus) === Dog.prototype); //true
console.log(Object.getPrototypeOf(Dog.prototype) === Wolf.prototype); //true
console.log(rufus instanceof Dog);
console.log(rufus instanceof Wolf);
console.log(rufus instanceof Object);

//Output:
//--------------------------------
//Rufus the dog: woof
//Rufus the dog: awoooooooo
//true
//true
//true
//true
//true
//--------------------------------