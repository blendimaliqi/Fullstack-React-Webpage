import http from './http';

const API_URL = '/authors';

export const listAuthors = async () => {
  try {
    return await http.get(`${API_URL}`);
  } catch (err) {
    return err.response;
  }
};

export const getAuthorById = async (id) => {
  try {
    return await http.get(`${API_URL}/${id}`);
  } catch (err) {
    return err.response;
  }
};

export default {
  listAuthors,
  getAuthorById,
};
