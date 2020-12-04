import React, { createContext, useReducer, useContext } from 'react';

const UserContext = createContext();
const UserDispatchContext = createContext();

const initialState = {
  cookie: '',
  role: '',
};

const reducer = (state, { type, userData }) => {
  switch (type) {
    case 'SET_COOKIE': {
      state.cookie = userData.token;
      return state;
    }
    case 'SET_ROLE': {
      state.role = userData.user.role;
      return state;
    }
    default:
      return state;
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserDispatchContext.Provider value={dispatch}>
      <UserContext.Provider value={state}>{children}</UserContext.Provider>
    </UserDispatchContext.Provider>
  );
};

export const useUserState = () => useContext(UserContext);
export const useUserDispatch = () => useContext(UserDispatchContext);
export default UserProvider;
