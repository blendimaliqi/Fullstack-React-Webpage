import Mail from '../models/mail.js';
import { ApiFilters } from '../utils/apiFilters.js';

/** INSPIRASJON
 * API Funksjon for hente mail basert på id
 * @param {Mail} id - på email som skal hentes
 */
export const getMailById = async (id) => Mail.findById(id);

/** GJENBRUK OG INSPIRASJON
 * API Funksjon for å liste ut mailer fra databasen
 * @param {queryparametere} queryStr - page, limit
 * @returns - antall resultater, antall sider, nåværende 
 * side og resultater på nåværende side
 */
export const listMails = async (queryStr) => {
  const { limit, page } = queryStr;
  const filters = new ApiFilters(Mail.find(), queryStr);
  const articles = await filters.query;
  const paginated = await filters
    .pagination()
    .query.populate('category', 'name');

  return {
    results: articles.length,
    totalPages: Math.ceil(articles.length / limit) || 1,
    currentPage: page && page > 0 ? parseInt(page) : 1,
    data: paginated,
  };
};

/** INSPIRASJON
 * API Funksjon for å lage mail
 * @param {Mail} data - basert på Mail modellen
 */
export const createMail = async (data) => Mail.create(data);
