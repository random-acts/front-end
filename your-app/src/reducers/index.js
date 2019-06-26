import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL
} from "../actions";

const defaultState = {
  logginIn: false,
  error: null,
  loading: true,
  signUp: false,
  token: localStorage.getItem("token")
};
export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true,
        error: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        error: false,
        token: localStorage.getItem("token")
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loggingIn: false,
        error: action.payload
      };
<<<<<<< HEAD
=======

>>>>>>> 462f61f3c09189d94eee092f5887782406d2f3b5
    case SIGNUP_START:
      return {
        ...state,
        error: false,
        signUp: true,
        loading: true
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        signUp: false,
        token: action.payload
      };
<<<<<<< HEAD
    case SIGNUP_FAIL:
      return {
        ...state,
        loading: false,
        signup: false,
        error: action.payload
      };
=======

>>>>>>> 462f61f3c09189d94eee092f5887782406d2f3b5
    default:
      return state;
  }
};
export default reducer;
