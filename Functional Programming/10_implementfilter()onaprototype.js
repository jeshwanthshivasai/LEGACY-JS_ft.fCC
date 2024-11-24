/*
You might learn a lot about the filter method if you implement your own version of it.
It is recommended you use a for loop or Array.prototype.forEach().
*/

Array.prototype.myFilter = function(callback) {
  const newArray = [];
  // Only change code below this line
  for(let i=0; i < this.length; i++) {
    if(callback(this[i], i, this) == true) {
      newArray.push(this[i]);
    }
  }
  // Only change code above this line
  return newArray;
};