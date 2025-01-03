/*
ou can run the same code multiple times by using a loop.

The first type of loop we will learn is called a while loop because it runs while a specified condition is true and stops once that condition is no longer true.

const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}

In the code example above, the while loop will execute 5 times and append the numbers 0 through 4 to ourArray.
*/

// Setup
const myArray = [];

// Only change code below this line
let i = 5
while(i >= 0 && i <=5) {
  myArray.push(i);
  i--;
}