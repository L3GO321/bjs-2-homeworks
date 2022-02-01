'use strict';

function solveEquation(a, b, c) {
  let roots = [];
  let D = b ** 2 - 4 * a * c;

  switch(true) {
    case D < 0:
      return roots;
      break;
    case D === 0:
      roots.push(-b / (2 * a));
      return roots;
      break;
    case D > 0:
      roots.push((-b + Math.sqrt(D)) / (2 * a), (-b - Math.sqrt(D)) / (2 * a));
      return roots;
  }
  
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

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount = 0; 

  if (Number.isNaN(Number(percent))) {
    return (`Параметр <Процентная ставка> содержит неправильное значение <${percent}>`);
  }

  if (Number.isNaN(Number(contribution))) {
    return (`Параметр <Начальный взнос> содержит неправильное значение <${contribution}>`);
  } 

  if (Number.isNaN(Number(amount))) {
    return (`Параметр <Общая стоимость> содержит неправильное значение <${amount}>`);
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

  totalAmount = ((creditBody * (interestRate + (interestRate / (((1 + interestRate) ** months) - 1)))* months)).toFixed(2);

  return totalAmount;
}
