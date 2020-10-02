const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let turn = Math.pow(2, disksNumber) - 1;
  let second = parseInt(turn / (turnsSpeed / 3600));
  return {
    turns: turn,
    seconds: second
  };
};
