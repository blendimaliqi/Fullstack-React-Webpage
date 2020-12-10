import http from './http';
import { getCsrfToken } from './loginService';

const API_URL = '/categories';

/** BASERT PÅ FORELESERS EKSEMPLER
 * Axios api kall for å liste ut kategorier
 */
export const listCategories = async () => {
  try {
    return await http.get(`${API_URL}`);
  } catch (err) {
    return err.response;
  }
};

/** BASERT PÅ FORELESERS EKSEMPLER
 * Axios api kall for å hente ut kategori basert på id
 * @param {Category} id - ObjectId til category som skal hentes
 */
export const getCategoryById = async (id) => {
  try {
    return await http.get(`${API_URL}/${id}`);
  } catch (err) {
    return err.response;
  }
};

/** BASERT PÅ FORELESERS EKSEMPLER
 * Axios api kall for å lage en kategori
 * Hvis i prod kreves csrf token
 * @param {Category} data - name
 */
export const createCategory = async (data) => {
  try {
    if (process.env.NODE_ENV === 'production') {
      await getCsrfToken();
    }
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
