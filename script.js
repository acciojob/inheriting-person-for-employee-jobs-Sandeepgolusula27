// complete this js code
// function Person(name, age) {}

// function Employee(name, age, jobTitle) {}

// // Do not change code below this line
// window.Person = Person;
// window.Employee = Employee
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add greet method to Person prototype
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

function Employee(name, age, jobTitle) {
  // Call Person constructor to initialize name and age
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Inherit from Person
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Add jobGreet method to Employee prototype
Employee.prototype.jobGreet = function () {
  console.log(
    `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`
  );
};

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;

