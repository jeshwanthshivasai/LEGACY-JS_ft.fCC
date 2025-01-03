/*
The parseInt() function parses a string and returns an integer.
It takes a second argument for the radix, which specifies the base of the number in the string.
The radix can be an integer between 2 and 36.

--> The function call looks like:

parseInt(string, radix);

--> And here's an example:

const a = parseInt("11", 2);

--> The radix variable says that 11 is in the binary system, or base 2.
--> This example converts the string 11 to an integer 3.
*/

function convertToInteger(str) {
  let convert = parseInt(str, 2);
  return convert;
}

convertToInteger("10011");

/*
The function takes str and returns an integer instead of a string but “understanding” its a binary number instead of a decimal one thanks to the radix parameter (2).
*/