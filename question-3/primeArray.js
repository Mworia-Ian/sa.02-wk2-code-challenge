/* 
You are tasked with writing a function that takes an array of numbers
as input and returns a new array containing only the prime numbers from
the original array. How would you implement this function efficiently,
ensuring that it accurately identifies prime numbers and returns them in
the same order they appear in the input array? For example if you provide
an array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] it should return an array [2, 3, 5, 7].
*/



function findPrime(myArr) {
    // initialize an empty array that will store the prime numbers found in myArr
    let finalArray = [];
    // iterates through each element in myArr
    myArr.forEach((num) => {
        // used to count the number of factorss the number being checked has
        let factor = 0;
        // iterates from 0 up to and including the current number(num)
        for (let i = 1; i <= num; i++) {
            // checks if num is divisible by i
            if (num % i === 0) {
                // increments factor variable when num is divisible by i
                factor++;
            }
        }
        // 
        if (factor === 2) {
            // appends the prime numbers found to the empty array finalArray
            finalArray.push(num);
        }
    });
    // prints out the final prime array
    console.log(finalArray);
}

findPrime([11, 12, 13, 14, 15, 16, 17, 18, 19, 20])