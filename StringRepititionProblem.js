/* Time limit: 1.00 s Memory limit: 512 MB
You are given a DNA sequence: a string consisting of characters A, C, G, and T. Your task is to find the longest repetition in the sequence. This is a maximum-length substring containing only one type of character.

Input

The only input line contains a string of n characters.

Output

Print one integer: the length of the longest repetition.

Constraints
1≤n≤106
Example

Input:
ATTCGGGA

Output:
3 */

function repeatedChar(str){
    let letterCount = {} //create an object to store string chars as keys, with number of time they appeared as its their values.
    
    if(str === '')
    return 'Invalid input';

    for(const char of str)  //running for-of loop on given string.
    {
        //if letterCount[char] already exists then add 1 to it otherwise initialize it to 1
        letterCount[char]? letterCount[char]++ : letterCount[char] = 1;
    }

    //console.log(Object.values(letterCount));

    let max = Math.max(...Object.values(letterCount));  //get values from object, and return an array of them, then get those values using spread operator.
    return max;
}

let input = 'aaaaggccctttttttt'; //input string between the quotes.

let t1 = performance.now();
repeatedChar(input);
let t2 = performance.now();

//comment this line to get the desired answerś
console.log(`Time Elapsed =  ${(t2 - t1)/1000} seconds. BEWARE! Code execution time is different on different machines. This is just to give you an approximate idea of how good is the performance of code is right now`);  //comment this out to get the missingNumber as output,if you are not getting it.
