export const SET_LOADING = 'SET_LOADING';
export const GET_ACTS = 'GET_ACTS';
export const ACTS_ERROR = 'ACTS_ERROR';
export const ADD_ACT = 'ADD_ACT';
export const DELETE_ACT = 'DELETE_ACT';
export const UPDATE_ACT = 'UPDATE_ACT';
export const SET_CURRENT_ACT = 'SET_CURRENT_ACT';
export const CLEAR_CURRENT_ACT = 'CLEAR_CURRENT_ACT';

// Get all of the acts
export const getActs = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/acts');
    const data = await res.json();

    dispatch({
      type: GET_ACTS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: ACTS_ERROR,
      payload: error
    });
  }
};

// Add a act to the list
export const addAct = act => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/acts', {
      method: 'POST',
      body: JSON.stringify(act),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_ACT,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: ACTS_ERROR,
      payload: error.response.data
    });
  }
};

// Delete a act from the server
export const deleteAct = id => async dispatch => {
  try {
    setLoading();

    await fetch(`/acts/${id}`, {
      method: 'DELETE'
    });

    dispatch({
      type: DELETE_ACT,
      payload: id
    });
  } catch (error) {
    dispatch({
      type: ACTS_ERROR,
      payload: error
    });
  }
};

// Update the act on the server
export const updateAct = act => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`/acts/${act.id}`, {
      method: 'PUT',
      body: JSON.stringify(act),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();

    dispatch({
      type: UPDATE_ACT,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: ACTS_ERROR,
      payload: error
    });
  }
};

// Setting the current act
export const setCurrent = act => {
  return {
    type: SET_CURRENT_ACT,
    payload: act
  };
};

// Clearing the current act
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT_ACT
  };
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
