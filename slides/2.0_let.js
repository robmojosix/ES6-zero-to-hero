// ************************************** //
// let
// ************************************** //

// Lets are block-scoped instead of lexically scoped to a function
var hello = "hello";
{
  var hello = "bonjour";
}
console.log(hello); // "bonjour"

let hello = "hello";
{
  let hello = "bonjour";
}
console.log(hello); // "hello"

// Lets are hoisted to the top of the block, while var declarations are hoisted to top of the function
x = 1
{
  console.log(x); // 1
  var x;
}

x = 1 // JS error: x is not defined
{
  console.log(x); // undefined
  let x;
}

// lets solve scoping and declaration issues with inner functions
// lets create a new binding with every iteration as they are block scoped
for(var i=0; i<10; i++) {
  setTimeout(function(){ console.log(i);  },200)
}
// 10 10 10 10 10 10 10 10 10 10

for(let i=0; i<10; i++) {
  setTimeout(function(){ console.log(i);  },200)
}
// 0 1 2 3 4 5 6 7 8 9
