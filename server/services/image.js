import Image from '../models/image.js';

/** GJENBRUKT FRA FORELESERS EKSEMPLER
 * API funksjon for å laste opp et bilde
 * @param {Image} data - basert på Image modell
 * @returns - bilde
 */
export const uploadImage = async (data) => {
  const image = new Image({
    file_path: data.path,
    file_mimetype: data.mimetype,
  });

  const savedImage = await image.save();

  return savedImage;
};

/** GJENBRUKT FRA FORELESERS EKSEMPLER
 * API funksjon for å hente bilde basert på Id (brukes til nedlastning)
 * @param {Image} id - til bild som skal hentes
 */
export const getImageById = async (id) => Image.findById(id);
