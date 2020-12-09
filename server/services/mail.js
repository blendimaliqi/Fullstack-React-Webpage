import Mail from '../models/mail.js';
import { ApiFilters } from '../utils/apiFilters.js';

export const getMailById = async (id) => Mail.findById(id);

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

export const createMail = async (data) => Mail.create(data);
