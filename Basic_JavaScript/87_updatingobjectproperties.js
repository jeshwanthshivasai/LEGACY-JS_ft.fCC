/*
After you've created a JavaScript object, you can update its properties at any time just like you would update any other variable.
You can use either dot or bracket notation to update.

For example, let's look at ourDog:

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

--> Since he's a particularly happy dog, let's change his name to the string Happy Camper.
--> Here's how we update his object's name property: ourDog.name = "Happy Camper"; or ourDog["name"] = "Happy Camper".
--> Now when we evaluate ourDog.name, instead of getting Camper, we'll get his new name, Happy Camper.
*/

// Setup
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog.name = "Happy Coder";       //dot notation
myDog["name"] = "Happy Coder";    //bracket notation