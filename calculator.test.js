/* eslint-disable */
const Calculator = require('./calculator');

// task 3
describe('check calculator add method', () => {
  // Arrange
  test('class with input 5 and 2', () => {
    // Act
    const calc = new Calculator(5, 2);
    // Assert
    expect(calc.add()).toBe(7);
  });
  // Arrange
  test('class with input 3 and 30', () => {
    // Act
    const calc = new Calculator(3, 30);
    // Assert
    expect(calc.add()).toBe(33);
  });
  // Arrange
  test('class with input 1 and 0.25', () => {
    // Act
    const calc = new Calculator(1, 0.25);
    // Assert
    expect(calc.add()).toBe(1.25);
  });
});

describe('check calculator subtract method', () => {
  // Arrange
  test('class with input 5 and 2', () => {
    // Act
    const calc = new Calculator(5, 2);
    // Assert
    expect(calc.subtract()).toBe(3);
  });
  // Arrange
  test('class with input 3 and 30', () => {
    // Act
    const calc = new Calculator(3, 30);
    // Assert
    expect(calc.subtract()).toBe(-27);
  });
  // Arrange
  test('class with input 1 and 0.25', () => {
    // Act
    const calc = new Calculator(1, 0.25);
    // Assert
    expect(calc.subtract()).toBe(0.75);
  });
});

describe('check calculator divide method', () => {
  // Arrange
  test('class with input 5 and 2', () => {
    // Act
    const calc = new Calculator(5, 2);
    // Assert
    expect(calc.divide()).toBe(2.5);
  });
  // Arrange
  test('class with input 3 and 30', () => {
    // Act
    const calc = new Calculator(3, 30);
    // Assert
    expect(calc.divide()).toBe(0.1);
  });
  // Arrange
  test('class with input 1 and 0.25', () => {
    // Act
    const calc = new Calculator(1, 0.25);
    // Assert
    expect(calc.divide()).toBe(4);
  });
});

describe('check calculator multiply method', () => {
  // Arrange
  test('class with input 5 and 2', () => {
    // Act
    const calc = new Calculator(5, 2);
    // Assert
    expect(calc.multiply()).toBe(10);
  });
  // Arrange
  test('class with input 3 and 30', () => {
    // Act
    const calc = new Calculator(3, 30);
    // Assert
    expect(calc.multiply()).toBe(90);
  });
  // Arrange
  test('class with input 1 and 0.25', () => {
    // Act
    const calc = new Calculator(1, 0.25);
    // Assert
    expect(calc.multiply()).toBe(0.25);
  });
});
