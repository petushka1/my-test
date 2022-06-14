/* eslint-disable */
const capitalize = require('./capitalize');

// task 4
describe('check if string returned capitalized', () => {
  // Arrange
  test('is string !false and value "hello" to equal "Hello"', () => {
  // Act
    const string = 'hello';
    // Assert
    expect(capitalize(string)).toBe('Hello');
  });
  // Arrange
  test('value "123" is not a string', () => {
    // Act
    const string = 123;
    // Assert
    expect(capitalize(string)).toBe(false);
  });
});
