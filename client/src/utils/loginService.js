import http from './http';

/** GJENBRUK FRA FORELESERS EKSEMPLER
 * Går gjennom api for csrf som ligger i server og legger csrf token i header.
 * Viktig å merke at cors i server fila må endres til å tillate dette.
 */
export const getCsrfToken = async () => {
  try {
    const { data } = await http.get('/csrf-token');
    http.defaults.headers['X-CSRF-Token'] = data.data;
  } catch (err) {
    return err.response;
  }
};

/** GJENBRUK FRA FORELESERS EKSEMPLER
 * Axios api kall for å hente ut bruker informasjon om innlogget bruker (må være innlogget)
 * Hvis i prod kreves csrf-token
 */
export const getCurrentUser = async () => {
  try {
    if (process.env.NODE_ENV === 'production') {
      await getCsrfToken();
    }
    return await http.get('/me');
  } catch (err) {
    return err.response;
  }
};

/** GJENBRUK FRA FORELESERS EKSEMPLER
 * Axis api kall for å logge inn bruker
 * @param {User} data - email, password
 */
export const loginPost = async (data) => {
  try {
    if (process.env.NODE_ENV === 'production') {
      await getCsrfToken();
    }
    return await http.post('/login', { ...data });
  } catch (err) {
    return err.response;
  }
};

/** GJENBRUK FRA FORELESERS EKSEMPLER
 * Axios api kall for å logge ut bruker (terminerer cookie/token)
 */
export const logoutPost = async () => {
  try {
    if (process.env.NODE_ENV === 'production') {
      await getCsrfToken();
    }
    return await http.post('/logout');
  } catch (err) {
    return err.response;
  }
};

export default {
  loginPost,
  getCurrentUser,
  logoutPost,
  getCsrfToken,
};
