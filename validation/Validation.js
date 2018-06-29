/**
 * !Validations through validator.js methods
 *
 * * https://github.com/chriso/validator.js
 * * Export validateRegisterData Input for register.js
 * ? Params for function input/data
 *
 * */

const validator = require("validator");

const Validation = function() {
  //* incase I may add methods inside the constructor
  //* #note 'this' will
  //* Prototype will enable us to easily define methods to all instances
  const self = this;
  //* store our errors
  this.errors = {};
};

//* check if input value is empty methd
//* takes value parameter checks if undefined, null, empty object
Validation.prototype.isValueEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);

//* Check user name method
//* takes input and validates length
Validation.prototype.checkName = function(input) {
  if (!validator.isLength(input.name, { min: 4, max: 24 })) {
    this.errors.name = "Name must be between 4 - 24 characters";
  }

  return {
    errors: this.errors,
    isValid: this.isValueEmpty(this.errors)
  };
};

module.exports = Validation;
