// Test Case 3
class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  add() {
    const sum = this.a + this.b;
    return sum;
  }

  subtract() {
    const sub = this.a - this.b;
    return sub;
  }

  divide() {
    const div = this.a / this.b;
    return div;
  }

  multiply() {
    const mult = this.a * this.b;
    return mult;
  }
}
/*
const calc = new Calculator(5, 2);
console.log(calc.divide());
*/
module.exports = Calculator;
