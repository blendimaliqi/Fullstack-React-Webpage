import multer from 'multer';
import ErrorHandler from '../utils/errorHandler.js';

/** GJENBRUK FRA FORELESERS EKSEMPLER
 * funksjon som sjekker at fil som skal lastes opp
 * enten er av typem .jpeg, .jpg eller .png
 * @returns - error message, http code 400 hvis feil filtype
 */
function fileFilter(req, file, cb) {
  const fileTypes = /\.(jpeg|jpg|png)$/;
  if (!file.originalname.match(fileTypes)) {
    return cb(
      new ErrorHandler('Kun filer av typen jpeg, jpg og png er tillat', 400)
    );
  }

  return cb(null, true);
}

/** Lager en random verdi som skal legges til filnavnet */
const customValue = () => Math.random() * Math.PI;

/** GJENBRUK FRA FORELESERS EKSEMPLER
 * spesifiserer hvor bilder skal lagres /public/images
 * legger til en custom value i filnavn for å holde unike.
 */
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './public/images');
  },
  filename(req, file, cb) {
    cb(null, `${customValue()}_${file.originalname}`);
  },
});

/** GJENBRUK FRA FORELESERS EKSEMPLER
 * Mellom vare for opplasting av bilder, spesifiserer lagringsdestinasjon,
 * filstørrelse (5Mb), validerer filtype og forventer et bilde
 */
export const upload = multer({
  storage,
  limits: { fileSize: 5000000 }, // 5Mb filesize limit
  fileFilter,
}).single('image');
