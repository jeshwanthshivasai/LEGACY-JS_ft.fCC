/*
Functional programming is a style of programming where solutions are simple, isolated functions, without any side effects outside of the function scope: INPUT -> PROCESS -> OUTPUT

Functional programming is about:

Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change

Pure functions - the same input always gives the same output

Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled
*/

// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/


const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4TeamFCC = getTea(40);
// Only change code above this line


/*
The getTea() function must be called and stored in the tea4TeamFCC variable.
Make sure to read through the getTea() function and understand exactly what it does.
The function takes in one variable - numOfCups.
A teaCups[] array is first made and a for loop is set up to count down the number of cups passed into the function.
A new cup of tea is then pushed to the array through every iteration of the for loop.
Thus resulting in an array full of the amount of teacups originally passed into the getTea() function.
*/

