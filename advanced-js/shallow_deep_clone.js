/*
https://www.youtube.com/watch?v=phDUGm_UnsQ
https://www.youtube.com/watch?v=4Ej0LwjCDZQ&t=214s
*/

let x = 1;
let y = x;

console.log('x: ' + x);
console.log('y: ' + y);

// primitives are immutable
let myName = 'Hunor';
myName[0] = 'D'; // nope!
console.log('myName: ', myName); // Strings are immutable - so cannot be changed

// reassignment is not the same as mutable
myName = 'John';
console.log('myName: ', myName);


// structural types use references
let xArray = [1,2,3];
let yArray = xArray;
console.log('xArray: ', xArray);
console.log('yArray: ', yArray);

xArray.push(4);
console.log('xArray: ', xArray);
console.log('yArray: ', yArray);

yArray.push(5);
console.log('xArray: ', xArray);
console.log('yArray: ', yArray);

// structures contain mutable data
yArray[0] = 8;
console.log('xArray: ', xArray);
console.log('yArray: ', yArray);

// impura functions mutate the data 
const addToScoreHistory = (array, score) => {
	array.push(score);
  return array;
};

const scoreArray = [10, 20, 30];
console.log(addToScoreHistory(scoreArray, 40));

// this mutates the original array
// this is considered a side effect
// note: const does not make an array variable mutable because you can still the elements in the array BUT you cannot re-assign

let originalObject = {
	name: 'Hunor',
  age: 20
};

let copiedObject = originalObject;
console.log('originalObject: ', originalObject);
console.log('copiedObject: ', copiedObject);

originalObject.name = 'John';
console.log('originalObject: ', originalObject);
console.log('copiedObject: ', copiedObject);

copiedObject.age = 30;
console.log('originalObject: ', originalObject);
console.log('copiedObject: ', copiedObject);

// shallow copy -> only ONE level deep
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log('originalArray: ', originalArray);
console.log('copiedArray: ', copiedArray);

originalArray[0] = 10;
console.log('originalArray: ', originalArray);
console.log('copiedArray: ', copiedArray);

copiedArray[0] = 100;
console.log('originalArray: ', originalArray);
console.log('copiedArray: ', copiedArray);

const originalObjectA = { name: "John", age: 25 };
const copiedObjectA = { ...originalObjectA };
console.log('originalObjectA: ', originalObjectA);
console.log('copiedObjectA: ', copiedObjectA);

originalObjectA.name = 'Judy';
console.log('originalObjectA: ', originalObjectA);
console.log('copiedObjectA: ', copiedObjectA);

copiedObjectA.age = 40;
console.log('originalObjectA: ', originalObjectA);
console.log('copiedObjectA: ', copiedObjectA);

const originalObjectB = 
{ 
	name: "Mike", 
  age: 50,
  third: {a: 1, b: 2}
};
const copiedObjectB = { ...originalObjectB };
console.log('originalObjectB: ', originalObjectB);
console.log('copiedObjectB: ', copiedObjectB);

originalObjectB.age = 100; // first level works
console.log('originalObjectB: ', originalObjectB);
console.log('copiedObjectB: ', copiedObjectB);

originalObjectB.third.a = 10; // second level does not work
console.log('originalObjectB: ', originalObjectB);
console.log('copiedObjectB: ', copiedObjectB);

// how to deep copy
const deepCopyObjectC = JSON.parse(JSON.stringify(originalObjectB));
console.log('originalObjectB: ', originalObjectB);
console.log('deepCopyObjectC: ', deepCopyObjectC);

deepCopyObjectC.third.a = 1000;
console.log('originalObjectB: ', originalObjectB);
console.log('deepCopyObjectC: ', deepCopyObjectC);

// recursive method to deep copy
function deepClone(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj; // Base case: return primitive values as is
  }

  const clone = Array.isArray(obj) ? [] : {}; // Create a new empty array or object as the clone

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = deepClone(obj[key]); // Recursively clone nested objects or arrays
    }
  }

  return clone; // Return the deep cloned object
}

/*
Explanation:

The deepClone function takes an object (obj) as an argument and returns a deep cloned copy of it.
The base case of the recursive function is checked first. 
If obj is a primitive value or null, it is returned as is, as there is no need to clone it.
If obj is an object or an array, a new empty array or object (clone) is created as the clone.
A for...in loop is used to iterate over the properties of obj.
The hasOwnProperty method is used to ensure that only the object's own properties are cloned, excluding inherited properties.
For each property, the deepClone function is recursively called on the property value (obj[key]) to clone nested objects or arrays.
The cloned property value is assigned to the corresponding key in the clone object.
After cloning all properties, the deep cloned clone object is returned.
*/






