/*
Sometimes you need to iterate through all the keys within an object.

You can use a for...in loop to do this. The for...in loop looks like:

const refrigerator = {
  'milk': 1,
  'eggs': 12,
};

for (const food in refrigerator) {
  console.log(food, refrigerator[food]);
}

This code logs milk 1 and eggs 12, with each key-value pair on its own line.

We defined the variable food in the loop head and this variable was set to each of the object's keys on each iteration, resulting in each food's name being printed to the console.

NOTE: Objects do not maintain an ordering to stored keys like arrays do; thus a key's position on an object, or the relative order in which it appears, is irrelevant when referencing or accessing that key.
*/

const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(allUsers) {
  // Only change code below this line
  let result = 0;
  for(let user in allUsers) {
    if(allUsers[user].online === true) {
      result++;
    }
  }
  return result;
  // Only change code above this line
}

console.log(countOnline(users));

/*
Here’s how to fix the function:

--> Initialize a counter before the loop to keep track of the number of users who are online.
--> Inside the loop, check if the online property of each user is true.
--> If it is, increment the counter.
--> Finally, return the counter after the loop finishes.

Explanation:

--> let onlineCount = 0;: Initializes the counter to 0.
--> for (let user in allUsers): Loops over each user in allUsers.
--> if (allUsers[user].online === true): Checks if the online status is true.
--> onlineCount++: Increments the counter if the user is online.
--> return onlineCount;: Returns the total count after the loop.
*/