const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  const sampleActivityNumber = parseFloat(sampleActivity);

  if (
    typeof sampleActivity == "string" &&
    sampleActivityNumber > 0 &&
    sampleActivityNumber < MODERN_ACTIVITY
  ) {
    return Math.ceil(
      Math.log(MODERN_ACTIVITY / sampleActivityNumber) /
        (Math.LN2 / HALF_LIFE_PERIOD)
    );
  }

  return false;
};
