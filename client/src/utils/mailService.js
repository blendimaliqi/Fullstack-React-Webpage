import http from './http';
import { getCsrfToken } from './loginService';

const API_URL = '/sendmail';

export const sendMailToUser = async (data) => {
  try {
    if (process.env.NODE_ENV === 'production') {
      await getCsrfToken();
    }
    return await http.post(`${API_URL}`, data); 
  } catch (error) {
    return error.response;
  }
};

export const sendMailToAdmin = async (data) => {
  try {
    if (process.env.NODE_ENV === 'production') {
      await getCsrfToken();
    }
    return await http.post(`${API_URL}/adminmail`, data);
  } catch (error) {
    return error.response;
  }
};

export const listInbox = async (limit, page) => {
  try {
    return await http.get(`${API_URL}?limit=${limit}&page=${page}`);
  } catch (err) {
    return err.response;
  }
};
export default {
  sendMailToUser,
  listInbox,
  sendMailToAdmin,
};
