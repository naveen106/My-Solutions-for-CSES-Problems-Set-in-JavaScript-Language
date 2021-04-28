function increasingArray(arr){
   
    let count = 0;

    for(let i = 1; i<arr.length; i++)
    {
        if(arr[i] - arr[i-1] < 0)
        {
         count += arr[i-1] - arr[i]; 
         arr[i] = arr[i-1];  
        }

    }

    return count;
}

//let variable = [/*given array*/];
increasingArray(/*enter array or variable which has array stored here */);