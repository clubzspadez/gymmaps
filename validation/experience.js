const Validation = require("./Validation");
//! Exports
module.exports = function validateExperience(input) {
  const validateThisInput = new Validation();
  // returning errors, and isvalid after validating input for
  return validateThisInput.checkExperience(input);
};
