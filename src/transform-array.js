const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Argument is not array!");
  }

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next":
        i++;
        break;
      case "--discard-prev":
        if (i === 0 || arr[i - 2] === "--discard-next") {
          break;
        }

        result.pop();
        break;
      case "--double-next":
        if (i === arr.length - 1) {
          break;
        }

        result.push(arr[++i]);
        break;
      case "--double-prev":
        if (i === 0 || arr[i - 2] === "--discard-next") {
          break;
        }

        result.push(arr[--i])
        break;
      default:
        result.push(arr[i])
        break;
    }
  }

  return result;
};
