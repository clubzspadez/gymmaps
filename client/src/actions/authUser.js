export const LOGIN_USER = "LOGIN_USER";
export const ADD_USER = "ADD_USER";

// action creater for authUser

// creates action or returns an action from what data is taken in
export const regUser = function(userInput) {
  return {
    type: ADD_USER,
    user: userInput
  };
};
