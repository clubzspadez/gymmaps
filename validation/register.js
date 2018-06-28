/**
 * !Validations through validator.js methods
 *
 * * https://github.com/chriso/validator.js
 * * Export validateRegisterData Input for register.js
 * ? Params for function input/data
 *
 */

const validator = require("validator");

const Validation = function() {
  const isThisValid = validator;
  const self = this;
  //* store our errors
  this.errors = {};

  //* check if input value is empty methd
  //* takes value parameter checks if undefined, null, empty object
  this.isValueEmpty = value =>
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0);

  //* Check user name method
  //* takes input and validates length
  this.checkName = input => {
    if (!isThisValid.isLength(input.name, { min: 4, max: 24 })) {
      this.errors.name = "Name must be between 4 - 24 characters";
    }

    return {
      errors: this.errors,
      isValid: this.isValueEmpty(this.errors)
    };
  };
};

//! Exports
module.exports = function validateRegisterData(input) {
  const validateThisData = new Validation();
  return validateThisData.checkName(input);
};
