/*
As you have seen from applying Array.prototype.map(), or simply map() earlier, the map method returns an array of the same length as the one it was called on
It also doesn't alter the original array, as long as its callback function doesn't.

In other words, map is a pure function, and its output depends solely on its inputs.
Plus, it takes another function as its argument.

You might learn a lot about the map method if you implement your own version of it.
It is recommended you use a for loop or Array.prototype.forEach().
*/

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
  for(let i=0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  // Only change code above this line
  return newArray;
};