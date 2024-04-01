/* 
Write a JavaScript function that accepts two numbers to generate an array between them.
For example, if the two numbers are 4 and 7, the output should be [4, 5, 6, 7] and -4
and 7 should return [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7].
*/

// define an arrow function that takes in 3 parameters
const arrayRange = (start, stop, step) =>
    /* The .from() method is a static method of the Array object in JavaScript ES6 
    It creates a new, shallow-copied Array instance from an array-like or iterable object */

    Array.from(
    // defines the parameters for generating the array
    { length: (stop - start) / step + 1 },
    // determines the value of each element in the generated array based on its index.
    (value, index) => start + index * step
    );


let range = arrayRange(-4, 7, 1)
let newRange = arrayRange(4,7,1)

console.log(range); 
console.log(newRange);