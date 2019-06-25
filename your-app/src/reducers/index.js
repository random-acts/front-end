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

    default:
      return state;
  }
};

export default reducer;
