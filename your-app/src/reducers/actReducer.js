import {
  SET_LOADING,
  GET_ACTS,
  ACTS_ERROR,
  ADD_ACT,
  DELETE_ACT,
  UPDATE_ACT,
  SET_CURRENT_ACT,
  CLEAR_CURRENT_ACT
} from '../actions/actActions';

const initialState = {
  acts: null,
  loading: false,
  error: null,
  current: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ACTS:
      return {
        ...state,
        acts: action.payload,
        loading: false
      };
    case ADD_ACT:
      return {
        ...state,
        acts: [...state.acts, action.payload],
        loading: false
      };
    case DELETE_ACT:
      return {
        ...state,
        acts: state.acts.filter(act => act.id !== action.payload),
        loading: false
      };
    case SET_CURRENT_ACT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT_ACT:
      return {
        ...state,
        current: null
      };
    case UPDATE_ACT:
      return {
        ...state,
        acts: state.acts.map(act =>
          act.id === action.payload.id ? action.payload : act
        )
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case ACTS_ERROR:
      console.log(action.payload);
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
