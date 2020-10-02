const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  const sample = parseFloat(sampleActivity);
  if ( sample <= 0 || sample > MODERN_ACTIVITY || !sample || typeof(sampleActivity) !== "string") {
    return false;
  } else {
    const k = 0.693 / HALF_LIFE_PERIOD;
    let age = Math.log(MODERN_ACTIVITY / sample) / k;
    age = Math.ceil(age);
    return age;
  }
};
