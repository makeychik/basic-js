const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const separator = options.separator || "+";
  const repeatTimes = options.repeatTimes || 1;
  const addition = "addition" in options ? options.addition : "";
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || "|";

  let addStr = (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition;
  let result = (str + addStr + separator).repeat(repeatTimes - 1) + str + addStr;

  return result;
};
