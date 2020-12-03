import Author from '../models/author.js';

export const getAuthorById = async (id) => Author.findById(id);

export const listAuthors = async () => Author.find();

export const createAuthor = async (data) => Author.create(data);
