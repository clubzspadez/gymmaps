const Validation = require("./Validation");
//! Exports
module.exports = function validateRegisterData(input) {
  const validateThisData = new Validation();
  return validateThisData.checkName(input);
};
