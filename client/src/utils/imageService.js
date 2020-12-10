import http from './http';
import { getCsrfToken } from './loginService.js';

const API_UPLOAD = '/upload';
const API_DOWNLOAD = '/download';

/** GJENBRUK FRA FORELESERS EKSEMPLER
 * Axios api kall for å laste opp et bilde.
 * Hvis i pro kreves csrf-token
 * @param {File} image - bilde som skal lastes opp
 */
export const uploadImage = async (image) => {
  try {
    if (process.env.NODE_ENV === 'production') {
      await getCsrfToken();
    }
    const data = new FormData();
    data.append('image', image);
    return await http.post(`${API_UPLOAD}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (err) {
    return err.response;
  }
};

/** GJENBRUK FRA FORELESERS EKSEMPLER
 * Axios api kall for å laste ned bilde via id
 * @param {File} id - Object id til allerede opplastet bilde
 */
export const downloadImage = async (id) => {
  try {
    return await http.get(`${API_DOWNLOAD}/${id}`);
  } catch (err) {
    return err.response;
  }
};

export default {
  uploadImage,
  downloadImage,
};
