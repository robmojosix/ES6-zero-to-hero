// ************************************** //
// Spread operator
// ************************************** //

// deconstructs arrays
let list = [1,2,3];
console.log(...list); // 1 2 3

// It's an iterator
let list2 = [4,5,6];
list.push(...list2); // [1,2,3,4,5,6]

// Deconstruct arguments passed to a function
const foo = (a, b, c) => {
  return a+b+c;
}
foo(...list);

// Constructing arrays using rest arguments
const foo = (a, b, ...c) => {
  console.log(c); // [3,4,5,6]
}
foo(1,2,3,4,5,6);
