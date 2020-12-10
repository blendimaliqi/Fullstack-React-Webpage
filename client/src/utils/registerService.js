import http from './http';
import { getCsrfToken } from './loginService';

/** BASERT PÅ EKSEMPLER FRA FORELESER
 * Axios api kall for å kjøre registreing av bruker.
 * Hvis i prod krev csrf-token.
 * @param {User} data - Navn, email, passord, role
 */
export const registerPost = async (data) => {
  try {
    if (process.env.NODE_ENV === 'production') {
      await getCsrfToken();
    }
    return await http.post('/register', { ...data });
  } catch (err) {
    return err.response;
  }
};

export default registerPost;
