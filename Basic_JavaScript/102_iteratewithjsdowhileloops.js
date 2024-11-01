/*
The next type of loop you will learn is called a do...while loop.
It is called a do...while loop because it will first do one pass of the code inside the loop no matter what, and then continue to run the loop while the specified condition evaluates to true.

const ourArray = [];
let i = 0;
do {
  ourArray.push(i);
  i++;
} while (i < 5);

--> The example above behaves similar to other types of loops, and the resulting array will look like [0, 1, 2, 3, 4].
--> However, what makes the do...while different from other loops is how it behaves when the condition fails on the first check.
*/

// Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
} while (i < 5);