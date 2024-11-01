/*
To check if a property on a given object exists or not, you can use the .hasOwnProperty() method.
--> someObject.hasOwnProperty(someProperty) returns true or false depending on if the property is found on the object or not.

Example

function checkForProperty(object, property) {
  return object.hasOwnProperty(property);
}
checkForProperty({ top: 'hat', bottom: 'pants' }, 'top'); // true
checkForProperty({ top: 'hat', bottom: 'pants' }, 'middle'); // false

--> The first checkForProperty function call returns true, while the second returns false.
*/

function checkObj(obj, checkProp) {
  // Only change code below this line
  if(obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
  // Only change code above this line
}