import { axiosWithAuth } from '../utils/axiosWithAuth';
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';
export const login_start = cred => dispatch => {
  dispatch({ type: LOGIN_START });
  return axiosWithAuth()
    .post('https://random-act-app.herokuapp.com/login', cred)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      dispatch({ type: LOGIN_SUCCESS });
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAIL, payload: true });
    });
};
export const sign_up = newUser => dispatch => {
  dispatch({ type: SIGNUP_START });
  return axiosWithAuth()
    .post('https://random-act-app.herokuapp.com/register', newUser, {
      headers: {
        authorization: localStorage.setItem('token', newUser)
      }
    })
    .then(res => {
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
    })
    .catch(res => {
      dispatch({
        type: SIGNUP_FAIL,
        payload: res.response
      });
    });
};
