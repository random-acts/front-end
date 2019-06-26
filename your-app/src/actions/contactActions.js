export const SET_LOADING = 'SET_LOADING';
export const GET_CONTACTS = 'GET_CONTACTS';
export const CONTACTS_ERROR = 'CONTACTS_ERROR';
export const ADD_CONTACT = 'ADD_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';

// Get all of the contacts
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

// Add a contact to the list
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

// Delete a contact from the server
export const deleteContact = id => async dispatch => {
  try {
    setLoading();

    await fetch(`/contacts/${id}`, {
      method: 'DELETE'
    });

    dispatch({
      type: DELETE_CONTACT,
      payload: id
    });
  } catch (error) {
    dispatch({
      type: CONTACTS_ERROR,
      payload: error
    });
  }
};

// Set
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
