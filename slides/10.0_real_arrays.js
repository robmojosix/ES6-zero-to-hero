// ************************************** //
// Real arrays
// ************************************** //

// This querySelector returns a nodeList not a real array
var elements = document.querySelectorAll(".listElement");
elements.pop(); // doesn't work

// ES5 workaround to create a real array
var elements = Array.prototype.slice.call(document.querySelectorAll(".listElement"));
elements.pop(); // works

// ES6 uses Array.from()
var elements = Array.from(document.querySelectorAll(".listElement"));
elements.pop(); // works

// The arguments keyword has a similar data structure; it isn't a real array
function lookAtArguments(arg1, arg2) {
  arguments.length // 2
  arguments.forEach() // errors
}

// ES6 can fix this with rest paramaters
function lookAtArguments(...args) {
  args.length // 2
  args.forEach() // works
}
