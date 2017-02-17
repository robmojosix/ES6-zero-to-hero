// ************************************** //
// Modules
// ************************************** //

// JavaScript has had modules for a long time.
// However, they were implemented via libraries,
// not built into the language.
// (AMD/UMD on the client & commonjs in node Browserify commonjs for client)
// ES6 modules tries to standardise this.

function name() {
  return "name";
}
export { name, otherFunction };
// or export directly on the function

export default name;
// don't need to know the name of a default export

// imports are hoisted
import { name } form 'path_to/moduleName';
import { name as firstName } form 'path_to/moduleName';
import * as nameModule form 'path_to/moduleName';
import newName from 'path_to/moduleName'; // default export
import { react } from 'react';
// npm modules or whichever module repository you use.
// no path as react has been exported as default

console.log(nameModule.name());
console.log(name());
