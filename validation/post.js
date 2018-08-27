const Validation = require("./Validation");
//! Exports
module.exports = function validateExperienceInput(input) {
  const validateThisInput = new Validation();
  // returning errors, and isvalid after validating input for
  return validateThisInput.checkPostInput(input);
};
