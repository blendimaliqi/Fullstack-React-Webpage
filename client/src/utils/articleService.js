import http from './http';
import { getCsrfToken } from './loginService';

const API_URL = '/articles';

/** BASERT PÅ FORELESERS EKSEMPLER
 * Axios api kall for å liste ut artikler med filter, søketerm
 * eller paginering
 * @param {Filter} filter - category = ObjectId (til opprettet kategori)
 * @param {Pagination} limit - hvor mange artikler som skal vises per side
 * @param {Pagination} page - hvilken side som skal vises
 * @param {q} searchTerm - søketerm
 */
export const list = async (filter, limit, page, searchTerm) => {
  try {
    if (filter === null) {
      return await http.get(
        `${API_URL}?limit=${limit}&page=${page}&q=${searchTerm}`
      );
    }
    return await http.get(
      `${API_URL}?category=${filter}&limit=${limit}&page=${page}&q=${searchTerm}`
    );
  } catch (err) {
    return err.response;
  }
};

/** BASERT PÅ FORELESERS EKSEMPLER
 * Axios api kall for å liste ut artikkelstatistikk
 */
export const listArticleStats = async () => {
  try {
    return await http.get(`${API_URL}?limit=1000&page=1`);
  } catch (err) {
    return err.response;
  }
};

/** BASERT PÅ FORELESERS EKSEMPLER
 * Axios api kall for å liste ut total artikkel statistikk
 */
export const listArticleStatsTotal = async () => {
  try {
    return await http.get(`${API_URL}/clicks`);
  } catch (err) {
    return err.response;
  }
};

/** BASERT PÅ FORELESERS EKSEMPLER
 * Axios api kall for å hente artikkel via id
 * @param {Arikkel} id - til artikkel som skal hentes
 */
export const get = async (id) => {
  try {
    return await http.get(`${API_URL}/${id}`);
  } catch (err) {
    return err.response;
  }
};

/** BASERT PÅ FORELESERS EKSEMPLER
 * Axis api kall for å lage artikkel
 * @param {Artikkel} data - title, ingress, content, date, category, author, secret, image
 */
export const create = async (data) => {
  try {
    if (process.env.NODE_ENV === 'production') {
      await getCsrfToken();
    }
    return await http.post(`${API_URL}`, data);
  } catch (err) {
    return err.response;
  }
};

/** BASERT PÅ FORELESERS EKSEMPLER
 * Axios api kall for å oppdatere en artikkel
 * @param {Artikkel} id - til artikkel som skal oppdateres
 * @param {Artikkel} data - som skal oppdateres (title, ingress, content, date, category, author, secret, image)
 */
export const updateArticle = async (id, data) => {
  try {
    if (process.env.NODE_ENV === 'production') {
      await getCsrfToken();
    }
    return await http.put(`${API_URL}/${id}`, data);
  } catch (err) {
    return err.response;
  }
};

/** BASERT PÅ FORELESERS EKSEMPLER
 * Axios api kall for å slette en artikkel
 * @param {Artikkel} id - til artikkel som skal slettes
 */
export const deleteArticle = async (id) => {
  try {
    if (process.env.NODE_ENV === 'production') {
      await getCsrfToken();
    }
    return await http.delete(`${API_URL}/${id}`);
  } catch (err) {
    return err.response;
  }
};

export default {
  create,
  list,
  get,
  listArticleStats,
  listArticleStatsTotal,
};
