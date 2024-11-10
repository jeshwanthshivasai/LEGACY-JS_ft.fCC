/*
JavaScript offers several built in methods that each iterate over arrays in slightly different ways to achieve different results (such as every(), forEach(), map(), etc.), however the technique which is most flexible and offers us the greatest amount of control is a simple for loop.

Consider the following:

function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
greaterThanTen([2, 12, 8, 14, 80, 0, 1]);

--> Using a for loop, this function iterates through and accesses each element of the array, and subjects it to a simple test that we have created.
--> In this way, we have easily and programmatically determined which data items are greater than 10, and returned a new array, [12, 14, 80], containing those items.
*/

function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for(let i=0; i<arr.length; i++) {
    if(arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }
  }
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));