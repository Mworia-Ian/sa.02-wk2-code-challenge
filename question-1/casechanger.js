/* 
Write a function that accepts a string as input and swaps the case of each character.
For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'
*/

/* Here I use the recursive readline module indorder to be able
to prompt the user for input in the terminal and display
the appropriate response. It exits once you type the word 'exit' */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); 

// declare function using the arrow function
const promptUser = () => {
    rl.question('Please enter a word and see me work my magic: ', (userInput) =>{
        
        // exits terminal if user enter the word 'exit'
        if(userInput.toLowerCase() === 'exit') {
            rl.close();
             return;
        }
        console.log(changeCase(userInput));
        promptUser();
    }
    )
}
promptUser()


// declare a function with the parameter str
function changeCase (str) {
// declare our variables s an empty string and a our undex counter
    let s = '';

    let a = 0;
    // while loop that will run as long as the index a is less than the length of input string str
    while (a < str.length) {
    // charAt will extract character at the current index a
        let n = str.charAt(a);
    // checks if n is uppercase
        if (n == n.toUpperCase()) {
    // converts it to lowercase if it is uppercase
            n = n.toLowerCase();
    // converts it to uppercase if the line is lowercase
        } else {
            
            n = n.toUpperCase();
        }
        // this line increments a by 1 so as to move to the next character on the string
        a += 1;
        // appends the converted character n to the string s
        s += n; 
    }
    // returns the converted string
    return s;
};