import http from './http';
import { getCsrfToken } from './loginService';

export const registerPost = async (data) => {
    try {
      if(process.env.NODE_ENV === 'production') {
        await getCsrfToken();
      }
      return await http.post('/register', { ...data });
    } catch (err) {
      return err.response;
    }
  };

export default registerPost;
