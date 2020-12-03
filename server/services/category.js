import Category from '../models/category.js';

export const getCategoryById = async (id) => Category.findById(id);

export const listCategorys = async () =>
  Category.find().populate('category', 'name');

export const createCategory = async (data) => Category.create(data);
