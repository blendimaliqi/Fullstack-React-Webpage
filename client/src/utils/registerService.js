import http from './http';


export const registerPost = async (data) => {
    try {
      return await http.post('/register', { ...data });
    } catch (err) {
      return err.response;
    }
  };

  export default registerPost;