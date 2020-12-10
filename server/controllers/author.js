import { authorService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';

/** BASERT PÅ FORELESERS EKSEMPLER
 * API controller funksjon for å hente forfatter basert på id. Håndterer promises
 * via mellomvare. Hvis mail ikke finnes kast en 404 (not found) med error melding,
 * ellers kast en 200 (OK) sammen med hentet forfatter.
 */
export const get = catchAsyncErrors(async (req, res, next) => {
  const author = await authorService.getAuthorById(req.params.id);
  if (!author) {
    return next(new ErrorHandler(`Finner author med ${req.params.id}`, 404));
  }
  res.status(200).json(author);
});

/** BASERT PÅ FORELESERS EKSEMPLER
 * API controller funksjon for å liste ut forfattere. Håndterer promises
 * via mellomvare. Kast en 200 (OK) sammen med resultatene.
 */
export const list = catchAsyncErrors(async (req, res, next) => {
  const result = await authorService.listAuthors();
  res.status(200).json(result);
});

/** BASERT PÅ FORELESERS EKSEMPLER
 * API controller funksjon for å lage en forfatter. Håndterer promises
 * via mellomvare. Kast en 201 (Created) sammen laget forfatter.
 */
export const create = catchAsyncErrors(async (req, res, next) => {
  const author = await authorService.createAuthor(req.body);
  res.status(201).json(author);
});
