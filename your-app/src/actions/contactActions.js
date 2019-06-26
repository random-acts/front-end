export const SET_LOADING = 'SET_LOADING';
export const GET_CONTACTS = 'GET_CONTACTS';
export const CONTACTS_ERROR = 'CONTACTS_ERROR';
export const ADD_CONTACT = 'ADD_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export const SET_CURRENT_CONTACT = 'SET_CURRENT_CONTACT';
export const CLEAR_CURRENT_CONTACT = 'CLEAR_CURRENT_CONTACT';

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

// Update the contact on the server
export const updateContact = contact => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`/contacts/${contact.id}`, {
      method: 'PUT',
      body: JSON.stringify(contact),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();

    dispatch({
      type: UPDATE_CONTACT,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: CONTACTS_ERROR,
      payload: error
    });
  }
};

// Setting the current contact
export const setCurrent = contact => {
  return {
    type: SET_CURRENT_CONTACT,
    payload: contact
  };
};

// Clearing the current contact
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT_CONTACT
  };
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
