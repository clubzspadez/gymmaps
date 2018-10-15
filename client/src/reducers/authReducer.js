import { ADD_USER, LOGIN_USER } from "../actions/authUser";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.tpye) {
    case ADD_USER:
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
}
