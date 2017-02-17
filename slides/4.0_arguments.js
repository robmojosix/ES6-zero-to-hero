// ************************************** //
// Default and required args
// ************************************** //

function greeting(message, name) {
  // ES5 way to handle default arguments
  name = name || "rob";
  console.log(message + name);
}

// ES6
function greeting(message, name = "rob") {
  console.log(message + name);
}

// Trick for handling required arguments
function required(param) {
  throw new Error(`param ${param} is required`);
}
function greeting(message, name = required("name")) {
  console.log(message + name);
}
