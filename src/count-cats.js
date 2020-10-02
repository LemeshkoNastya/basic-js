const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let count = 0;
  const arr = matrix.join(",").split(",");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "^^") {
      count += 1;
    }
  }
  return count;
};
