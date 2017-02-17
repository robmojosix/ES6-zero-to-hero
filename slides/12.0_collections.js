// ************************************** //
// Collections
// ************************************** //

// before es6 we'd use a workaround hash-map
var hashMap = {
  "element1": {Obj}
};

function add(key, value) {
  hashMap[key] = value;
};

add("element2", elm2);

for (var key in hashMap) {
  if (hashMap.hasOwnProperty(key)) {
    console.log(key + " -> " + hashMap[key]);
  }
}

// Keys have to be strings
// Iterating over the hash is cumbersome

// introducing maps:
const hash = new Map();
hash.set('name', 'rob');
hash.get('name');
// rest of api:
// size()
// clear()
// has()
// interators:
// keys()
// values()
// entries()

// Weak maps
const hash = new WeakMap();
// no iterators
// keys have to be objects
// references to its keys are weak
//     if there are no other references to one of its keys
//     the object is subject to garbage collection
//     no memory leaks

// example:
// http://stackoverflow.com/questions/29413222/what-are-the-actual-uses-of-es6-weakmap


// sets
const set = new Set([1, 2, 3, 4]); // [1,2,3,4]
const set = new Set([1, 2, 3, 4, 4]); // [1,2,3,4]
// similar api to maps
// but more like a list or array
// only stores values like array
// .add()
// values have to be unique
// store dom Elements example

// let x = new Set([...document.querySelectorAll('div')])
// x.size // 100
//
// x.add([...document.querySelectorAll('div')]);
// x.size // 100

// weaksets
const set = new WeakSet([{}, {}, {}, {}, {}]);
// no iterators
// can't be primative
// weak reference to values for Garbage collection
