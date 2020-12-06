import http from './http';

const API_URL = '/articles';

export const list = async (filter, limit, page) => {
  try {
    if (filter === null) {
      return await http.get(`${API_URL}?limit=${limit}&page=${page}`);
    }
    return await http.get(
      `${API_URL}?category=${filter}&limit=${limit}&page=${page}`
    );

    // return await http.get(`${API_URL}`);
  } catch (err) {
    return err.response;
  }
};

export const get = async (id) => {
  try {
    return await http.get(`${API_URL}/${id}`);
  } catch (err) {
    return err.response;
  }
};

export const create = async (data) => {
  try {
    return await http.post(`${API_URL}`, data);
  } catch (err) {
    return err.response;
  }
};

export default {
  create,
  list,
  get,
};
