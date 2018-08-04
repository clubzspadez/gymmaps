const Validation = require("./Validation");
//! Exports
module.exports = function validateEducationInput(input) {
  const validateThisInput = new Validation();
  // returning errors, and isvalid after validating input for
  return validateThisInput.checkEducationInput(input);
};
