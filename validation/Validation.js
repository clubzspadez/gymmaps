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
  //* #note 'this' will react differently
  //* Prototype will enable us to easily define methods to all instances
  const self = this;
  //* store our errors
  this.errors = {};
};

//* check if input value is empty methd
//* takes value parameter checks if undefined, null, empty object
Validation.prototype.ifValueEmpty = function(value) {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
};

/**
 * !Check input for Register Page
 *
 *
 * @pub
 */
Validation.prototype.checkInputforRegistration = function(input) {
  // ! Set input values to empty strings to use validator.isEmpty method
  input.name = !this.ifValueEmpty(input.name) ? input.name : "";
  input.email = !this.ifValueEmpty(input.email) ? input.email : "";
  input.password = !this.ifValueEmpty(input.password) ? input.password : "";
  input.password2 = !this.ifValueEmpty(input.password2) ? input.password2 : "";

  if (!validator.isLength(input.name, { min: 4, max: 24 })) {
    this.errors.name = "Name must be between 4 - 24 characters";
  }

  if (validator.isEmpty(input.name)) {
    this.errors.name = "Name field is required";
  }
  if (validator.isEmpty(input.email)) {
    this.errors.name = "Email field is required";
  }
  if (!validator.isEmail(input.email)) {
    this.errors.name = "Email is not valid";
  }
  this.checkPasswordForRegistration(input.password, input.password2, [
    "First",
    "Second"
  ]);

  return {
    errors: this.errors,
    isValid: this.ifValueEmpty(this.errors)
  };
};

Validation.prototype.checkPasswordForRegistration = function(
  passWord,
  confirmWord,
  [order, order2]
) {
  if (validator.isEmpty(passWord)) {
    return (this.errors.password = `${order} password field is required`);
  }
  if (!validator.isLength(passWord, { min: 6, max: 24 })) {
    return (this.errors.password = `${order} password length is a minimum of 6 characters`);
  }
  if (validator.isEmpty(confirmWord)) {
    return (this.errors.password2 = `${order2} password field is required`);
  }

  if (!validator.equals(passWord, confirmWord)) {
    return (this.errors.password2 = "Passwords must match");
  }
};

/**
 * !Check input for login Page
 *
 *
 * @pub
 */
Validation.prototype.checkInputForLogin = function(input) {
  input.email = !this.ifValueEmpty(input.email) ? input.email : "";
  input.password = !this.ifValueEmpty(input.password) ? input.password : "";

  if (!validator.isEmail(input.email)) {
    this.errors.name = "Email is not valid";
  }

  if (validator.isEmpty(input.email)) {
    this.errors.name = "Email field is required";
  }

  this.checkPasswordForLogin(input.password);

  return {
    errors: this.errors,
    isValid: this.ifValueEmpty(this.errors)
  };
};

Validation.prototype.checkPasswordForLogin = function(passWord) {
  if (validator.isEmpty(passWord)) {
    return (this.errors.password = `Password field is required`);
  }
};

/**
 * ! Profile validation
 *
 * * Validate handle, status, and skills
 * ? May validate URL's for website if listed
 *
 */
Validation.prototype.checkProfileInput = function({
  handle,
  status,
  skills,
  website,
  insta,
  linkedin,
  facebook,
  twitter,
  youtube
}) {
  const social = [insta, linkedin, facebook, twitter, youtube];
  handle = !this.ifValueEmpty(handle) ? handle : "";
  status = !this.ifValueEmpty(status) ? status : "";
  skills = !this.ifValueEmpty(skills) ? skills : "";

  if (!validator.isLength(handle, { min: 2, max: 40 })) {
    this.errors.handle = "Handle needs to be between 2 and 40 characters";
  }

  if (validator.isEmpty(handle)) {
    this.errors.handle = "Handle field is required";
  }

  if (validator.isEmpty(status)) {
    this.errors.status = "A status is a required";
  }

  if (validator.isEmpty(skills)) {
    this.errors.skills = "A skill set is a required";
  }

  // check valid URL for website if listed
  if (!this.ifValueEmpty(website)) {
    if (!validator.isURL(website)) {
      this.errors.website = "Not a valid URL";
    }
  }

  this.checkSocialMediaLinks(social);

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

Validation.prototype.checkSocialMediaLinks = function(socialMediaArray) {
  socialMediaArray.forEach(mediaLink => {
    if (!this.ifValueEmpty(mediaLink)) {
      if (!validator.ismediaLink(mediaLink)) {
        this.errors.mediaLink = "Not a valid URL";
      }
    }
  });
};

module.exports = Validation;
