// ************************************** //
// Object destructuring
// ************************************** //

// Detructure from object literal
const info = {
  name: "andrew",
  age: 63,
  status: "employed"
};

const {name, age} = info;
// ES5 equivalent:
// var name = info.name;

// Destructure from function return
function person() {
  return {
    name: "andrew",
    age: 63,
    status: "employed"
  }
}

const {name} = person();
const {name:firstName} = person();

// Destructure from array
const array = [1,2,3,4,5];
const [one,,three,,five] = array;

// Destructure from array of objects
const arrayOfObjs = [
  { name: "rob" },
  { name: "Emma" },
  { name: "Sam" }
]
arrayOfObjs.forEach( ({name}) => {
  // Rob
  // Emma
  // Sam
});
