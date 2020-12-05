import http from './http';

const API_URL = '/categories';

export const listCategories = async () => {
  try {
    return await http.get(`${API_URL}`);
  } catch (err) {
    return err.response;
  }
};

export const getCategoryById = async (id) => {
  try {
    return await http.get(`${API_URL}/${id}`);
  } catch (err) {
    return err.response;
  }
};

export const createCategory = async (data) => {
  try {
    return await http.post(`${API_URL}`, data);
  } catch (err) {
    return err.response;
  }
};

export default {
  listCategories,
  getCategoryById,
  createCategory,
};
