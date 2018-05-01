// Given an array, find the int that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
    for(var i = 0; i < A.length; i++){  
      //Query the number of times that this 'i' element appears
      //then verify if that number of times is odd. If it is true, then return
      //that 'i' element
      if((A.filter(function(item){return item == A[i]; })).length % 2 != 0){
        return A[i];
      }
    }
    return 0;
  }
console.log(findOdd([20,20,1,1,-1,-1,-2,-2,5]))

// I had to look this one up function written by k30v1n