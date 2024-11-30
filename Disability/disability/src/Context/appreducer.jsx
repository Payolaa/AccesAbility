
import { 
    SET_NAME, 
    CLEAR_NAME, 
    SET_ERROR, 
    SET_LOADING 
  } from './nameTypes';
  
  export const initialState = {
    name: '',
    error: null,
    loading: false
  };
  
  export const nameReducer = (state, action) => {
    switch (action.type) {
      case SET_NAME:
        return { ...state, name: action.payload, error: null, loading: false };
      case CLEAR_NAME:
        return { ...state, name: '', error: null };
      case SET_ERROR:
        return { ...state, error: action.payload, loading: false };
      case SET_LOADING:
        return { ...state, loading: true, error: null };
      default:
        return state;
    }
  };