import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  FETCH_ACTS_START,
  FETCH_ACTS_SUCCESS,
  FETCH_ACTS_FAIL
} from "../actions";

const defaultState = {
  logginIn: false,
  error: null,
  loading: false,
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
    case SIGNUP_FAIL:
      return {
        ...state,
        loading: false,
        signup: false,
        error: action.payload
      };
    case FETCH_ACTS_START:
      return {
        ...state,
        loading: true,
        error: false
      };
    case FETCH_ACTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false
      };
    case FETCH_ACTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
export default reducer;
