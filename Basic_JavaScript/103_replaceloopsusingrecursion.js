/*
Recursion is the concept that a function can be expressed in terms of itself.
To help understand this, start by thinking about the following task: multiply the first n elements of an array to create the product of those elements.
Using a for loop, you could do this:

function multiply(arr, n) {
  let product = 1;
  for (let i = 0; i < n; i++) {
    product *= arr[i];
  }
  return product;
}

--> However, notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1].
--> That means you can rewrite multiply in terms of itself and never need to use a loop.

function multiply(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply(arr, n - 1) * arr[n - 1];
  }
}

--> The recursive version of multiply breaks down like this.
--> In the base case, where n <= 0, it returns 1.
--> For larger values of n, it calls itself, but with n - 1.
--> That function call is evaluated in the same way, calling multiply again until n <= 0.
--> At this point, all the functions can return and the original multiply returns the answer.

Note: Recursive functions must have a base case when they return without calling the function again (in this example, when n <= 0), otherwise they can never finish executing.
*/

function sum(arr, n) {
  // Only change code below this line
  if(n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
  // Only change code above this line
}

/*
--> The if statement checks to see if sum is evaluating the base case, n <= 0, or not.
--> If it is, then sum returns the answer, 0 - the sum of elements from 0 to 0 inclusive.
--> Otherwise, it recurses by evaluating a simpler function call, sum(arr, n - 1).
--> Once that returns it adds a single array element, arr[n - 1], to it and returns that sum.
*/