const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) {
    throw "Error";
  } else {
    let arrTransform = [];

    for (let i = 0; i < arr.length; i++) {

      switch (arr[i]) {
        case '--discard-next':
          if (arr[i + 2] === '--double-prev' || arr[i + 2] === '--discard-prev') {
            i += 2;
          } else {
            i++;
          }
          break;
        case '--discard-prev':
          if (i > 0) {
            arrTransform.pop();
          }
          break;
        case '--double-next':
          if (i < arr.length - 1) {
            result = arrTransform.push(arr[i + 1]);
          }
          break;
        case '--double-prev':
          if (i > 0) {
            arrTransform.push(arr[i - 1]);
          }
          break;
        default:
          arrTransform.push(arr[i]);
          break;
      }

    }
    return arrTransform;
  }
};
