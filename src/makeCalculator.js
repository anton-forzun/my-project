'use strict';

function makeCalculator() {
  return {
    result: 0,

    reset() {
      this.result = 0;

      return this;
    },

    add(a, b) {
      return a + b;
    },

    subtract(a, b) {
      return a - b;
    },

    multiply(a, b) {
      return a * b;
    },

    divide(a, b) {
      return a / b;
    },

    operate(callback, num) {
      this.result = callback(this.result, num);

      return this;
    },
  };
}

module.exports = makeCalculator;
