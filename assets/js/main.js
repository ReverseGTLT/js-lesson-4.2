let operation = prompt('Enter operation')
let firstNum = +prompt('Enter first number');
let secondNum = +prompt('Enter second number');
let result = 0;

if (operation === 'add') {
  operation = '+';
  result = firstNum + secondNum;
  } else if (operation === 'sub') {
    operation = '-';
    result = firstNum - secondNum;
  } else if (operation === 'mult') {
    operation = '*';
    result = firstNum * secondNum;
  } else if (operation === 'div') {
    operation = '/';
    result = firstNum / secondNum;
} else {
  result = 'You entered wrong operator';
}

if (result !== 'You entered wrong operator') {
  alert(`${firstNum}${operation}${secondNum}=${result}`);
} else {
  alert('You entered wrong operator.')
}