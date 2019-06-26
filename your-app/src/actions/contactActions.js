export const SET_LOADING = 'SET_LOADING';
export const GET_CONTACTS = 'GET_CONTACTS';
export const CONTACTS_ERROR = 'CONTACTS_ERROR';
export const ADD_CONTACT = 'ADD_CONTACT';

export const getContacts = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/contacts');
    const data = await res.json();

    dispatch({
      type: GET_CONTACTS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: CONTACTS_ERROR,
      payload: error
    });
  }
};

export const addContact = contact => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/contacts', {
      method: 'POST',
      body: JSON.stringify(contact),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_CONTACT,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: CONTACTS_ERROR,
      payload: error.response.data
    });
  }
};

// Set
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
