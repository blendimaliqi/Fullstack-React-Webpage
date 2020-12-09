import http from './http';
import { getCsrfToken } from './loginService.js';

const API_UPLOAD = '/upload';
const API_DOWNLOAD = '/download';

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
