import http from './http';

export const getCurrentUser = async () => {
  try {
    return await http.get('/me');
  } catch (err) {
    return err.response;
  }
};

export const loginPost = async (data) => {
  try {
    return await http.post('/login', { ...data });
  } catch (err) {
    return err.response;
  }
};

export const logoutPost = async () => {
  try {
    return await http.post('/logout');
  } catch (err) {
    return err.response;
  }
};

export default {
  loginPost,
  getCurrentUser,
  logoutPost,
};
