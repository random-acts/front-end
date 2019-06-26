import {
  SET_LOADING,
  GET_CONTACTS,
  CONTACTS_ERROR,
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  SET_CURRENT_CONTACT,
  CLEAR_CURRENT_CONTACT
} from '../actions/contactActions';

const initialState = {
  contacts: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
        loading: false
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
        loading: false
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
        loading: false
      };
    case SET_CURRENT_CONTACT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT_CONTACT:
      return {
        ...state,
        current: null
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id ? action.payload : contact
        )
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case CONTACTS_ERROR:
      console.log(action.payload);
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
