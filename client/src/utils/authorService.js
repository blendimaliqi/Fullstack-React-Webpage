import http from './http';

const API_URL = '/authors';

/** BASERT PÅ FORELESERS EKSEMPLER
 * Axios api kall for å liste ut forfattere
 */
export const listAuthors = async () => {
  try {
    return await http.get(`${API_URL}`);
  } catch (err) {
    return err.response;
  }
};

/** BASERT PÅ FORELESERS EKSEMPLER
 * Axios api kall for å hente ut forfatter basert på id
 * @param {Forfatter} id - ObjectId til forfatter som skal hentes
 */
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
