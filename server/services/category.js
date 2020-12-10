import Category from '../models/category.js';

/** BASERT PÅ FORELESERS EKSEMPLER
 * API funksjon for å hente kategori basert på id.
 * @param {Category} id - For artikkel som skal hentes
 */
export const getCategoryById = async (id) => Category.findById(id);

/** BASERT PÅ FORELESERS EKSEMPLER
 * API funksjon for å liste ut kateorier
 */
export const listCategorys = async () => Category.find();

/** BASERT PÅ FORELESERS EKSEMPLER
 * API funksjon for å lage en kategori
 * @param {Category} data - basert på Category modell
 */
export const createCategory = async (data) => Category.create(data);
