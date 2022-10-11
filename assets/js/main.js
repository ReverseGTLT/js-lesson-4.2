let operation = prompt('Enter operation')
let firstNum = +prompt('Enter first number');
let secondNum = +prompt('Enter second number');
let result = 0;

if (operation === '+') {
  result = firstNum + secondNum;
  } else if (operation === '-') {
    result = firstNum - secondNum;
  } else if (operation === '*') {
    result = firstNum * secondNum;
  } else if (operation === '/') {
    result = firstNum / secondNum;
} else {
  result = 'You entered wrong operator';
}

if (result !== 'You entered wrong operator') {
  alert(`${firstNum}${operation}${secondNum}=${result}`);
} else {
  alert('You entered wrong operator.')
}