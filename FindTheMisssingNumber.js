//I don't know how will I be able to read the input from the CSES server, but I am sure that my solutions works, if you input the test data in my solutions,
//and run the algorithm, I am sure you will get the right answer.


function mainFunction(arrString){

    function putComma(argument)  // returns the string of values as array of numbers.
    {
        let newArray = [];
        let newString = arrString.split(' '); // removing the white space between chars of given string and putting the commas between them at the same time.

        let numbersOfString = [...newString.map( val => { return Number(val);})]; // converting the string chars to number and copying them in numbersOfString;
        return numbersOfString;
    }

 const returnedValue =  putComma(arrString); // calling putComma() function here.
 
// console.log(returnedValue);   //logs the array of numbers between which we have to find the missing Number.

    function findMissingNumber(arr){ //if you directly put the array when calling this function, then there's no need of other functions, run only this function and you will get the answer.

        //using bubble sort to find the greatest number, which is the last element after the first iteration.
        let i = 0;
        let temp;

        while(i === 0) // we are looping only once to get the biggestNumber, no matter how big the array is.
        {
            for(let j = 0; j<arr.length; j++)
            {
                if(arr[j]> arr[j+1])
                {
                    //SWAP
                    temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }

            i = 1;
        } 

        let biggestNum = arr[arr.length - 1];

        let totalSum = biggestNum * (biggestNum + 1) / 2;   //using the formula n(n+1)/2 to calculate the sum of first n natural numbers.

        let givenNumsSum = arr.reduce((acc, currentResult) => {return acc + currentResult;}, 0); //getting the total addition of given values (values with one number missing).

        const missingNumber = totalSum - givenNumsSum;
        return missingNumber;
    } 

     //function starts to run from here.
   return findMissingNumber(returnedValue);  
}

let t1 = performance.now();  // this gives you the code execution time in miliseconds.

//testing it with one of the input-test data of the given problem CSES problems set.

let t2 = performance.now();

console.log(`Time Elapsed =  ${(t2 - t1)/1000} seconds. BEWARE! Code execution time is different on different machines. This is just to give you an approximate idea of how good is the performance of code is right now`);  //comment this out to get the missingNumber as output,if you are not getting it.