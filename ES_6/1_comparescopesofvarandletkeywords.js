/*
--> When you declare a variable with the var keyword, it is declared globally, or locally if declared inside a function.
--> The let keyword behaves similarly, but with some extra features.
    When you declare a variable with the let keyword inside a block, statement, its scope is limited to that block, statement.

For example:

var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);

--> Here the console will display the values [0, 1, 2] and 3.
--> With the var keyword, i is declared globally.
    So when i++ is executed, it updates the global variable.
    
This code is similar to the following:

var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);

--> Here the console will display the values [0, 1, 2] and 3.
--> This behavior will cause problems if you were to create a function and store it for later use inside a for loop that uses the i variable.
--> This is because the stored function will always refer to the value of the updated global i variable.

The let keyword does not follow this behavior:

let numArray = [];
for (let i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray); // Output: [0, 1, 2]
console.log(i); // This will throw an error if you try to access i here, as 'i' is block-scoped


--> The variable i is declared with let inside the for loop, making it block-scoped and inaccessible outside the loop, which leads to an error when trying to log it.
--> Each iteration creates a unique i with values 0, 1, and 2, which are pushed into numArray, resulting in [0, 1, 2].
*/

function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}