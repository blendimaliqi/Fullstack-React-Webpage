import Article from '../models/article.js';
import { ApiFilters } from '../utils/apiFilters.js';

/** BASERT PÅ FORELESERS EKSEMPLER
 * API funksjon for å hente artikkel basert på id. (Populerer
 * resultat med navn på tilknyttet kategori)
 * @param {Article} id - For artikkel som skal hentes
 */
export const getArticleById = async (id) =>
  Article.findById(id).populate('category', 'name');

/** GJENBRUKT FRA FORELESERS EKSEMPLER OG TILPASSET VÅRT BRUK
 * API funksjon for å liste ut artikler
 * @param {queryparametere} queryStr - q, filter, limit, page
 * @returns - antall artikler, antall sider etter paginering,
 * nåværende side og artiklene på nåværende side
 */
export const listArticles = async (queryStr) => {
  const { limit, page } = queryStr;
  const filters = new ApiFilters(Article.find(), queryStr)
    .filter()
    .searchByQuery();

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

/** BASERT PÅ FORELESERS EKSEMPLER
 * API funksjon for å lage en artikkel
 * @param {Article} data - basert på Artikkel modell
 */
export const createArticle = async (data) => Article.create(data);

/** BASERT På FORELESERS EKSEMPLER
 * API funksjon for å oppdate artikkel
 * @param {Article} id - for artikkel som skal oppdateres
 * @param {*} data - felter som skal oppdateres
 */
export const updateArticle = async (id, data) =>
  Article.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

/** BASERT PÅ FORELESERS EKSEMPLER
 * API funksjon for sletting av artikkel, finner først artikkel
 * basert på id, for så å slette den hvis den er funnet
 * @param {Article} id - For artikkel som skal slettes
 */
export const removeArticle = async (id) => {
  const article = await Article.findById(id);
  article.remove();
};
