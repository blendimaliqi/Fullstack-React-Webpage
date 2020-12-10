import Author from '../models/author.js';

/** BASERT PÅ FORELESERS EKSEMPLER
 * API funksjon for å hente forfatter basert på id.
 * @param {Author} id - For forfatter som skal hentes
 */
export const getAuthorById = async (id) => Author.findById(id);

/** BASERT PÅ FORELESERS EKSEMPLER
 * API funksjon for å liste ut forfattere
 */
export const listAuthors = async () => Author.find();

/** BASERT PÅ FORELESERS EKSEMPLER
 * API funksjon for å lage en forfatter
 * @param {Author} data - basert på Author modell
 */
export const createAuthor = async (data) => Author.create(data);
