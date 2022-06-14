/* eslint-disable */
const { stringLength, reverseString } = require('./length');

// task 1
describe('check string length', () => {
  // Arrange
  test('pass a string "Hello World" with length to equal 11', () => {
  // Act
    const string = 'Hello';
    // Assert
    expect(stringLength(string)).toBe(5);
  });

  // Arrange
  test('pass an empty string', () => {
  // Act
    const string = '';
    // Assert
    expect(stringLength(string)).toBe('Your string should contain at least 1 char');
  });

  // Arrange
  test('pass a string longer than 10 char', () => {
  // Act
    const string = 'Hello World';
    // Assert
    expect(stringLength(string)).toBe('Your string is longer than 10 char');
  });
});

// task 2
describe('check reversed string', () => {
  // Arrange
  test('pass a string "Hello there" to equal "ereht olleH"', () => {
    // Act
    const string = 'Hello there';
    // Assert
    expect(reverseString(string)).toBe('ereht olleH');
  });
});
