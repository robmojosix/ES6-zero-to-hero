// ************************************** //
// Promises
// ************************************** //

// Javascript is a synchronous, single-threaded language
// Before promises we would deal with asyncronous commands with events and callback functions.

element.addEventListener('click', function() {
  // do stuff once Object has loaded.
  // If we need to make another async call we next another callback
  // Leads to callback hell
});

// Promises make or asyncronous JS look more synchronous

let p = new Promise((resolve, reject) => {
  // do async call;
  resolve(dataFromAsyncCall);
  reject(error);
});

p.then((data) => {
  console.log(data);
});
// thens return a new promise so they can be chained

p.catch((error) => {
  console.log(error);
});

// async and await coming in ES7
