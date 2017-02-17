// ************************************** //
// const
// ************************************** //

// const: can't be re-assigned
const MESSAGE = "Hello";

// It's a constant reference not a constant variable - it's not immutable

const MESSAGE = {}
MESSAGE.hello = "hello"; // works
MESSAGE = "hello"; // errors

// consts have to be asigned when declared
