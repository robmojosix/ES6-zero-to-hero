// ************************************** //
// arrow function
// ************************************** //

// In ES5 there are many ways to create a function:

// function declaration - hoisted
funciton greeting() {
  // do stuff
}

// function expression - not hoisted
var greeting = function(message, name) {
  //do stuff
}

// function constructor
var greeting = new Function(arg, code);

// object declaration
var greeting = {
  greet: funciton() {
    // do stuff
  }
}

// annonymous functions
(function() {
  // do stuff
})();

// ES6 brings two new ways to create functions
// generators which we'll cover later and
// arrow functions:

var greeting = (name) => {
  return "hello " + name;
}

// Single line arrow function
// Omit curly brases, implicit returns

var greeting = (name) => "hello " + name;

// Single argument arrow functions omit parentheses

var greeting = name => "hello " + name;

// Arrow function have no binding of keywords: this, arguments or super

// Arrow functions and lexical scoping:
// lexical scope is passed into arrow funcitons
// rather than the execution context (scope between the funciton block {})
// JS uses funcitons to declare a new execution context, not just blocks {}
// Lexical scoping is the scope surrounding the execution context
var Greeting = function(name) {
  this.name = name;
  this.greet = function(message, logger) {
    logger(message);
  }
  this.message = function() {
    // var that = this
    // old ES5 trick to fix issue below
    this.greet("hello", function(message) {
      // most of the time `this` refers to the owning object
      // annonymous functions have no owner
      // `this` won't work here
      // arrow funcitons get `this` from lexical scope
      // fixing this issue
      console.log(message + " " + this.name);
    })
  }
}

new Greeting("david").message();
