const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let counter = 1;

    arr.forEach((el) => {
      if (Array.isArray(el)) {
        let currentDepth = this.calculateDepth(el) + 1;
        if (currentDepth > counter) {
          counter = currentDepth;
        }
      }
    });

    return counter;
  }
};
