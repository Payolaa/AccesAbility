// NameContext.js
import React, { createContext, useReducer, useContext } from 'react';
import { nameReducer, initialState } from './nameReducer';
import { 
  SET_NAME, 
  CLEAR_NAME, 
  SET_ERROR, 
  SET_LOADING 
} from './nameTypes';

// Context
const NameContext = createContext();

// Provider Component
export const NameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(nameReducer, initialState);

  // Action creators
  const setName = (name) => {
    dispatch({ type: SET_NAME, payload: name });
  };

  const clearName = () => {
    dispatch({ type: CLEAR_NAME });
  };

  const setError = (error) => {
    dispatch({ type: SET_ERROR, payload: error });
  };

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <NameContext.Provider 
      value={{ 
        ...state, 
        setName, 
        clearName, 
        setError, 
        setLoading 
      }}
    >
      {children}
    </NameContext.Provider>
  );
};

// Custom hook
export const useName = () => {
  const context = useContext(NameContext);
  if (!context) {
    throw new Error('useName must be used within a NameProvider');
  }
  return context;
};