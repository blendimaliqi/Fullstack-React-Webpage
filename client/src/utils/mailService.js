import http from './http';
import { getCsrfToken } from './loginService';

const API_URL = '/sendmail';

/** BASERT PÅ EKSEMPLER FRA FORELESER
 * Axios api kall for sende bekreftelsesmail til henvender.
 * @param {Mail} data - Navn, email, question
 */
export const sendMailToUser = async (data) => {
  try {
    if (process.env.NODE_ENV === 'production') {
      await getCsrfToken();
    }
    return await http.post(`${API_URL}`, data);
  } catch (error) {
    return error.response;
  }
};

/** BASERT PÅ EKSEMPLER FRA FORELESER
 * Axios api kall for sende kopi av henvendelse til admin.
 * @param {Mail} data - Navn, email, question
 */
export const sendMailToAdmin = async (data) => {
  try {
    if (process.env.NODE_ENV === 'production') {
      await getCsrfToken();
    }
    return await http.post(`${API_URL}/adminmail`, data);
  } catch (error) {
    return error.response;
  }
};

/** BASERT PÅ EKSEMPLER FRA FORELESER
 * Axios api kall for å liste ut mailer fra database
 * @param {Result} limit - Hvor mange mailer som skal vises på en side
 * @param {Current} page - Hvilken side som skal vises
 */
export const listInbox = async (limit, page) => {
  try {
    return await http.get(`${API_URL}?limit=${limit}&page=${page}`);
  } catch (err) {
    return err.response;
  }
};
export default {
  sendMailToUser,
  listInbox,
  sendMailToAdmin,
};
