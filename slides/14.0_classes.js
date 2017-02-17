// ************************************** //
// Classes
// ************************************** //

// ES5, protypical inheritance
// funciton constructor
function Employee(name) {
  this.name = name;
}

Employee.prototype.role = function(role) {
  this.role = role;
}

var matt = new Employee("matt");
matt.role("developer");

// ES6, syntactic sugar on top of protypical inheritance
// contructors
// class methods with static
// extends
// super

// base class
class Employee {
  constructor(name) {
    this.name = name;
  }
  role(role) {
    this.role = role;
  }
  static info() {
    console.log("employee class etc...");
  }
}

// derived class
class Manager extends Employee {
  constructor(name) {
    super(name);
    // super.role("CTO");
  }
}

// super: used to make parent class contructor call
// or to make method calls on parent class
