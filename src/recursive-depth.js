const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (!Array.isArray(arr)) {
      return 0;
    } else {
      let depth = 1;
      for ( let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          let depthElement = 1;
          depthElement += this.calculateDepth(arr[i]);
          if (depthElement > depth) {
            depth = depthElement;
          }
        }
      }
      return depth;
    }
  }
};