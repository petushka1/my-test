/* eslint-disable */
// Test Case 1
const stringLength = (string) => {
  if (string.length > 0 && string.length <= 10) {
    return string.length;
  }
  let error;
  if (string.length === 0) {
    error = 'Your string should contain at least 1 char';
  } else {
    error = 'Your string is longer than 10 char';
  }
  return error;
};

// Test Case 2
const reverseString = (string) => {
  let newString = '';
  for (let i = string.length - 1; i >= 0; i -= 1) {
    newString += string[i];
  }
  return newString;
};

/*
const calc = new Calculator(7, 8);
console.log(calc.add());
*/

module.exports = {
  stringLength,
  reverseString,
};
