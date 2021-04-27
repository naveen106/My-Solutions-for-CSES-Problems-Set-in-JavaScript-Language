let evenArr = [];
let oddArr = [];

function permutation(n) {
    
    if(n===1 || n===2 || n===3)
    {
        let returnVal = 'NO SOLUTION';
        return returnVal;
    }

    if(n%2 === 0)
    {
 //       for(let i = 2; i<=n/2; i = i+2)
   
        let i = 1;

        while(i <= n/2)
        {         
          evenArr.push(i*2);
          i++;
        }
  
        for(i = 1; i<=n; i = i+2)
        {         
          oddArr.push(i);
        }
    }

    else
    {
        for(let i = 2; i<=n; i = i+2)      //fix this condition
        {
            evenArr.push(i);
        }

        for(let i = 1; i<=n; i = i+2)
        {
            oddArr.push(i);
        }        
    }

    console.log('This is even array =  ' + evenArr);
    console.log('This is odd array =  ' + oddArr + ' and the length of this array = ' + oddArr.length);

    return evenArr.concat(oddArr);
}

permutation(11542);