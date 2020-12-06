import React, {
  createContext,
  useReducer,
  useContext,
  useEffect,
  useState,
} from 'react';
import { getCurrentUser } from '../utils/loginService';

const UserContext = createContext();
const UserDispatchContext = createContext();

const initialState = [];

const reducer = (state, { type, userData }) => {
  switch (type) {
    case 'SET_USER': {
      state.cookie = userData.token;
      return state;
    }
    default:
      return state;
  }
};


export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [admin, setAdmin] = useState();

  const roleChecker = (userData) => {
    if(userData.user.role === 'admin') {
      console.log("ROLE: " +userData.user.role);
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  }

  useEffect(() => {
    const fetchCurrentUserData = async () => {
      if (user === null) {
        const { data } = await getCurrentUser();
        if (data?.success) {
          const currentUser = { user: data.data, message: data.message };
          setUser(currentUser);
          roleChecker(currentUser);
        } else {
          setUser(null);
        }
        setLoading(false);
      }
    };
    fetchCurrentUserData();
    console.log(user);
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        isLoading: loading,
        isAdmin: user?.role === 'admin',
        isLoggedIn: !!user,
        userName: user?.user,
        setUser,
      }}

    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserState = () => useContext(UserContext);
export const useUserDispatch = () => useContext(UserDispatchContext);
export default UserProvider;
