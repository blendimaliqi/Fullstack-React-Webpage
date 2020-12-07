import http from './http';

const API_URL = '/sendmail';

export const sendMailToUser = async(data) => {
    try {
        return await http.post(`${API_URL}`, data); 
        //return await http.get(`${API_URL}`);
    } catch (error) {
        return error.response;
    }
}

export const listInbox = async (limit, page) => {
    try {
    return await http.get(
        `${API_URL}?limit=${limit}&page=${page}`
    );
    } catch (err) {
      return err.response;
    }
  };
  export default {
    sendMailToUser,
    listInbox,
  };
