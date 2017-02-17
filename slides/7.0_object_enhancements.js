// ************************************** //
// Object enhancements
// ************************************** //

// shorthand for property creation on objects and functions
const firstName = "Rob";
const lastName = "Jones";

const me = {
  firstName,
  lastName,
  fullName() { console.log(`${this.firstName} ${this.lastName}`) },
};

// computed keys during object decloration
const name = "computed"
const me = {
  [name]: "Value"
};
