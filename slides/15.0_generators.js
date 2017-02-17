// ************************************** //
// Generators
// ************************************** //

// In JS land events are added to the event loop an get worked on and are finish/returned from before the next event is worked off the queue
// run to completion
// generator functions don't
// they can be interupted
// generators can be paused form inside
// and started again from an outside function/processes
// allows us to control control flow

function *generator(firstName) {
  console.log("step 1: set up first name");
  let name = yield firstName + " ";
  console.log("step 2: add middle name");
  name = yield name + " ";
  console.log("step 3: add last name");
  yield name + ".";
  console.log("step 4: finished");
}

let nameGenerator = generator("Brian");
console.log(nameGenerator);

let name = nameGenerator.next();
console.log(name.value);

name = nameGenerator.next(name.value + "Timothy");
console.log(name.value);

name = nameGenerator.next(name.value + "Johnson");
console.log(name.value);

console.log(nameGenerator.next());

// first call returns a generator object which is an iterator
// they have next methods

// yield acts as an execution break point whereby parameters can be passed out on the first .next() call
// and parameters can be passed in on the subsequent next() call.

// http://thejsguy.com/2016/10/15/a-practical-introduction-to-es6-generator-functions.html
// use generators with promises to create more synchronous looking asynchronous code
