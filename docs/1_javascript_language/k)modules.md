### 11. Modules

```javascript

// A module is a self contained file that organises the code into reusable pieces

// A functionality of a module can be accessed from outside from another one. 

// modules always work in strict mode

// since module uses special keywords , browser should be told to treat it as  a module

// ie <script type="module"></script>

// "this" in a module is undefined

// normal js scripts (<script></script>) execute immediately. but module scripts are executed only after the full load of html page. 

// note that html page is rendered though script may not be loaded fully. better to use loading indicators in those cases. 

// each module has its own global level scope. variables from one dont leak into another 

// Modules must be loaded via HTTP(s)—they don’t work via file:// protocol

// modules can be dynamically imported

let mod = await import(./module)
mod.doSomething()


// The import(module) expression loads the module and returns a promise that resolves into a module object that contains all its exports. It can be called from any place in the code.

// We can use it dynamically in any place of the code, for instance:

let modulePath = prompt("Which module to load?");

// import(modulePath)
//   .then(obj => <module object>)
//   .catch(err => <loading error, e.g. if no such module>);

// Re-export syntax "export ... from ... " allows to import things and immediately export them (possibly under another name), like this:

// export {sayHi} from './say.js'; // re-export sayHi

// export {default as User} from './user.js'; // re-export default


// Namespace import:
// Collect all named exports under one object:

import * as say from './say.js';
say.sayHi('John');
say.sayBye('John');



// Alias import
// Rename imports locally:

import { sayHi as hi, sayBye as bye } from './say.js';
hi('John');
bye('John');



```