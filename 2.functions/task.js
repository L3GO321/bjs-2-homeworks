// Задание 1

function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = arr[0];
  let avg = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } 
    
    if  (arr[i] < min) {
      min = arr[i];
    }

    sum += arr[i];    
  }

  avg = sum / arr.length;
  
  return {
    max: max, 
    min: min, 
    avg: Number(avg.toFixed(2)) 
  };
};

// Задание 2
function worker(arr) {
  let sumArr = 0;

  for (let i = 0; i < arr.length; i++) {
    sumArr += arr[i];
  }
  return sumArr;
}

function makeWork(arrOfArr, func) {
  let maxSum = func(arrOfArr[0]);

  for (let i = 1; i < arrOfArr.length; i++) {
    let sum = func(arrOfArr[i]);

    if (sum > maxSum) {
      maxSum = sum;
    }
  }

  return maxSum;
}

// Задание 3
function worker2(array) {
  let max = array[0];
  let min = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }

    if (array[i] < min) {
      min = array[i];
    }
  }

  return Math.abs(max - min);
}
