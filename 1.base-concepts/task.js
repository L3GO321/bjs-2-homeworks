'use strict';
//HOMEWORK 1

//Task 1
function solveEquation(a, b, c) {
  let roots = [];
  let D = b ** 2 - 4 * a * c;

  switch(true) {
    case D === 0:
      roots.push(-b / (2 * a));
      break;
    case D > 0:
      roots.push((-b + Math.sqrt(D)) / (2 * a), (-b - Math.sqrt(D)) / (2 * a));
  }
  return roots;
  
  //Второй вариант условия
  // if (D < 0) {
  //   return roots;
  // } else if (D === 0) {
  //   roots.push(-b / (2 * a));
  //   return roots;
  // } else if (D > 0) {
  //   roots.push((-b + Math.sqrt(D)) / (2 * a), (-b - Math.sqrt(D)) / (2 * a));
  //   return roots;
  // }
}

//Task 2
function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount = 0; 

  if (Number.isNaN(Number(percent))) {
    return (`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`);
  }

  if (Number.isNaN(Number(contribution))) {
    return (`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`);
  } 

  if (Number.isNaN(Number(amount))) {
    return (`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`);
  }

  percent = Number(percent);
  contribution = Number(contribution);
  amount = Number(amount);

  const creditBody = amount - contribution;
  const interestRate = percent / 100 / 12;

  const currentDate = new Date();

  let months = (date.getFullYear() - currentDate.getFullYear()) * 12 - (currentDate.getMonth() + 1) + date.getMonth();

  if (date.getDate() >= currentDate.getDate()) {
    months++;
  }

  totalAmount = Number(((creditBody * (interestRate + (interestRate / (((1 + interestRate) ** months) - 1)))* months)).toFixed(2));

  return totalAmount;
}


// HOMEWORK 2

//Task 1
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

//Task 2
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

//Task 3
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
