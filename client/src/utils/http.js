import Axios from 'axios';

/** GJENBRUK FRA FORELESERS EKSEMPLER
 * Lager en axios instans som kobler seg på api
 */
const http = Axios.create({
  baseURL: `${process.env.BASE_URL}${process.env.API_VERSION}`,
  withCredentials: true,
});

export default http;
