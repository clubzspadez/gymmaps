/**
 * !Validations through validator.js methods
 *
 * * https://github.com/chriso/validator.js
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
Validation.prototype.checkInputforRegistration = function({
  name,
  email,
  password,
  password2
}) {
  // ! Set input values to empty strings to use validator.isEmpty method
  name = !this.ifValueEmpty(name) ? name : "";
  email = !this.ifValueEmpty(email) ? email : "";
  password = !this.ifValueEmpty(password) ? password : "";
  password2 = !this.ifValueEmpty(password2) ? password2 : "";

  if (!validator.isLength(name, { min: 4, max: 24 })) {
    this.errors.name = "Name must be between 4 - 24 characters";
  }

  if (validator.isEmpty(name)) {
    this.errors.name = "Name field is required";
  }
  if (validator.isEmpty(email)) {
    this.errors.email = "Email field is required";
  }
  if (!validator.isEmail(email)) {
    this.errors.email = "Email is not valid";
  }
  this.checkPasswordForRegistration(password, password2, ["First", "Second"]);

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
 *
 */
Validation.prototype.checkInputForLogin = function({ email, password }) {
  email = !this.ifValueEmpty(email) ? email : "";
  password = !this.ifValueEmpty(password) ? password : "";

  if (!validator.isEmail(email)) {
    this.errors.name = "Email is not valid";
  }

  if (validator.isEmpty(email)) {
    this.errors.email = "Email field is required";
  }

  this.checkPasswordForLogin(password);

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
  const requiredFields = [handle, status, skills];
  const social = [insta, linkedin, facebook, twitter, youtube];
  handle = !this.ifValueEmpty(handle) ? handle : "";
  status = !this.ifValueEmpty(status) ? status : "";
  skills = !this.ifValueEmpty(skills) ? skills : "";

  if (!validator.isLength(handle, { min: 2, max: 40 })) {
    this.errors.handle = "Handle needs to be between 2 and 40 characters";
  }

  // check valid URL for website if listed
  if (!this.ifValueEmpty(website)) {
    if (!validator.isURL(website)) {
      this.errors.website = "Not a valid URL";
    }
  }

  if (validator.isEmpty(handle)) {
    this.errors.handle = `Handle field is required`;
  }
  if (validator.isEmpty(status)) {
    this.errors.handle = `Status field is required`;
  }

  if (validator.isEmpty(skills)) {
    this.errors.handle = `Skills field is required`;
  }

  if (!this.ifValueEmpty(insta)) {
    if (!validator.isURL(insta)) {
      this.errors.insta = "Not a valid URL";
    }
  }
  if (!this.ifValueEmpty(linkedin)) {
    if (!validator.isURL(linkedin)) {
      this.errors.linkedin = "Not a valid URL";
    }
  }
  if (!this.ifValueEmpty(facebook)) {
    if (!validator.isURL(facebook)) {
      this.errors.facebook = "Not a valid URL";
    }
  }
  if (!this.ifValueEmpty(twitter)) {
    if (!validator.isURL(twitter)) {
      this.errors.twitter = "Not a valid URL";
    }
  }
  if (!this.ifValueEmpty(youtube)) {
    if (!validator.isURL(youtube)) {
      this.errors.youtube = "Not a valid URL";
    }
  }

  return {
    errors: this.errors,
    isValid: this.ifValueEmpty(this.errors)
  };
};

Validation.prototype.checkExperienceInput = function({ title, company, from }) {
  title = !ifValueEmpty(title) ? title : "";
  company = !ifValueEmpty(company) ? company : "";
  from = !ifValueEmpty(from) ? from : "";

  if (validator.isEmpty(title)) {
    this.errors.title = "Job title field is required";
  }

  if (validator.isEmpty(company)) {
    this.errors.company = "Company field is required";
  }

  if (validator.isEmpty(from)) {
    this.errors.from = "From date field is required";
  }

  return {
    errors: this.errors,
    isValid: ifValueEmpty(this.errors)
  };
};

Validation.prototype.checkEducationInput = function({
  school,
  degree,
  fieldofstudy,
  from
}) {
  school = !ifValueEmpty(school) ? school : "";
  degree = !ifValueEmpty(degree) ? degree : "";
  fieldofstudy = !ifValueEmpty(fieldofstudy) ? fieldofstudy : "";
  from = !ifValueEmpty(from) ? from : "";

  if (Validator.isEmpty(school)) {
    this.errors.school = "School field is required";
  }

  if (Validator.isEmpty(degree)) {
    this.errors.degree = "Degree field is required";
  }

  if (Validator.isEmpty(fieldofstudy)) {
    this.errors.fieldofstudy = "Field of study field is required";
  }

  if (Validator.isEmpty(from)) {
    this.errors.from = "From date field is required";
  }

  return {
    errors: his.errors,
    isValid: ifValueEmpty(this.errors)
  };
};

Validation.prototype.checkPostInput = function({ text }) {
  text = !ifValueEmpty(text) ? text : "";

  if (!validator.isLength(text, { min: 10, max: 300 })) {
    this.errors.name = "Text must be between 10 - 300 characters";
  }

  if (Validator.isEmpty(text)) {
    this.errors.text = "Text field is required";
  }

  return {
    errors: his.errors,
    isValid: ifValueEmpty(this.errors)
  };
};
module.exports = Validation;
