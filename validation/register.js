const Validation = require("./Validation");
//! Exports
module.exports = function validateRegisterData(input) {
  const validateThisInput = new Validation();
  return validateThisInput.checkInputForRegistration(input);
};
