/*
pop() always removes the last element of an array.
What if you want to remove the first?

That's where .shift() comes in.
It works just like .pop(), except it removes the first element instead of the last.

Example:

const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();

--> removedFromOurArray would have a value of the string Stimpson, and ourArray would have ["J", ["cat"]].
*/

// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromMyArray = myArray.shift();