import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from "../actions";

const defaultState = {
  logginIn: false,
  error: null,
  loading: true
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
    default:
      return state;
  }
};

export default reducer;
