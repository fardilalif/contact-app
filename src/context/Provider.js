import React, {createContext, useReducer} from 'react';
import authInitialState from './initialStates/authInitialState.js';
import contactsInitialState from './initialStates/contactsInitialState.js';
import authReducer from './reducers/authReducer.js';
import contactsReducer from './reducers/contactsReducer.js';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [authState, authDispatcher] = useReducer(authReducer, authInitialState);
  const [contactsState, contactsDispatcher] = useReducer(
    contactsReducer,
    contactsInitialState,
  );

  return (
    <GlobalContext.Provider
      value={{authState, contactsState, authDispatcher, contactsDispatcher}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
