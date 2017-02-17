// ************************************** //
// String interpolation
// ************************************** //

// ES5 way or concating and interpolating strings:
var firstName = "Rob";
var name = firstName + " Jones";

// ES6 interpolating expressions with text
// string templating, respects whitespace
let firstName = "Rob"
let lastName = "Rob"
let message  = `hello ${firstName} ${lastName}`;

// Tagged template literals
let fn = (strings, arg, arg2) => {
  // do crazy templating logic
  return `${arg} ${arg2} ${strings[0]}`
}

let message  = fn`hello ${firstName} ${lastName}`;
