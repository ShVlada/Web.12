function getMaxSubSum(array) {
    let maxSum = 0; 
  
    for (let i = 0; i < array.length; i++) {
      let sumFixedStart = 0;
      for (let j = i; j < array.length; j++) {
        sumFixedStart += array[j];
        maxSum = Math.max(maxSum, sumFixedStart);
      }
    }
  
    return maxSum;
  }
  
  alert( getMaxSubSum([-1, 2, 3, -9]) ); 
  alert( getMaxSubSum([-2, -1, 1, 2]) );
  alert( getMaxSubSum([10, -9, 2, -3, 5]) ); 
