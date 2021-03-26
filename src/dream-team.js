const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    return members.reduce((teamName, el) => {
      if (typeof el === "string") {
        teamName += el.trim().toUpperCase()[0];
      }
      return teamName.split("").sort().join("");
    }, "");
  }

  return false;
};
