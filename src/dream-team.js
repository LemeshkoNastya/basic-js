const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(members)) {
    return false;
  } else {
    let team = [];
    let element;
    for (let i = 0; i < members.length; i++) {
      if (typeof(members[i]) == "string") {
        element = members[i].trim()[0];
        team.push(element.toUpperCase());
      }
    }
    return team.sort().join("");
  }
};
