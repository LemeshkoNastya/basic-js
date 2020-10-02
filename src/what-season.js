const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (!date) {
    return "Unable to determine the time of year!"
  } else if (!date.valueOf()) {
    throw new Error();
  } else {
    const month = date.getMonth();
    if (month == 11 || (month >= 0 && month < 2)) {
      return "winter";
    } else if (month > 1 && month < 5) {
      return "spring";
    } else if (month > 4 && month < 8) {
      return "summer";
    } else {
      return "autumn";
    }
  }
};
