const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  const answer = [];
  
  if (!options.repeatTimes) {
    answer.push(str);
    if (!options.additionRepeatTimes) {
      answer.push(String(options.addition));
    }
  } else {

    for (let i = 0; i < options.repeatTimes; i++) {
      answer.push(String(str));

      for (let j = 0; j < options.additionRepeatTimes; j++) {
        answer.push(String(options.addition));

        if (j != (options.additionRepeatTimes - 1)) {
          if (!options.additionSeparator) {
            answer.push("|");
          } else {
            answer.push(options.additionSeparator);
          }
        }
      }

      if (i != (options.repeatTimes - 1)) {
        if (!options.separator) {
          answer.push("+");
        } else {
          answer.push(options.separator);
        }
      }
    }
  }
  return answer.join("");
};
  