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
Validation.prototype.ifValueEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);

//* Check user name method
//* takes input and validates length
Validation.prototype.checkName = function(input) {
  // ! Set input values to empty strings to use validator.isEmpty method
  input.name = !this.ifValueEmpty(input.name) ? input.name : "";
  input.email = !this.ifValueEmpty(input.email) ? input.email : "";
  input.password = !this.ifValueEmpty(input.password) ? input.password : "";
  input.password2 = !this.ifValueEmpty(input.password2) ? input.password2 : "";

  if (!validator.isLength(input.name, { min: 4, max: 24 })) {
    this.errors.name = "Name must be between 4 - 24 characters";
  }

  return {
    errors: this.errors,
    isValid: this.ifValueEmpty(this.errors)
  };

  if (validator.isEmpty(input.name)) {
    this.errors.name = "Name field is required";
  }
  if (validator.isEmpty(input.email)) {
    errors.name = "Email field is required";
  }
  this.checkPassword(input.password, input.password2, "First");
};

Validation.prototype.checkPassword = function(passWord, confirmWord, order) {
  //? Lowercase
  //? One uppercase letter
  //? At least 1 number
  //? minimum 8 characters
  if (validator.isEmpty(passWord)) {
    return (this.errors.password = `${order} password field is required`);
  }
  if (validator.isLength(passWord, { min: 6, max: 24 })) {
    return (this.errors.password = `${order} password is required`);
  }
};

Validation.prototype.checkPassword2 = function(pwd, order) {
  //? Lowercase
  //? One uppercase letter
  //? At least 1 number
  //? minimum 8 characters
  if (validator.isEmpty(pwd)) {
    return (errors.password2 = `${order} password field is required`);
  }
  if (validator.isLength(pwd, { min: 6, max: 24 })) {
    return (errors.password2 = `${order} Password must at least be 6 characters long`);
  }
};

module.exports = Validation;
