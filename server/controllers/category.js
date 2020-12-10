import { categoryService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';

/** BASERT PÅ FORELESERS EKSEMPLER
 * API controller funksjon for å hente kategori basert på id. Håndterer promises
 * via mellomvare. Hvis kategori ikke finnes kast en 404 (not found) med error melding,
 * ellers kast en 200 (OK) sammen med hentet kategori.
 */
export const get = catchAsyncErrors(async (req, res, next) => {
  const category = await categoryService.getCategoryById(req.params.id);
  if (!category) {
    return next(
      new ErrorHandler(`Finner ikke kategori med ${req.params.id}`, 404)
    );
  }
  res.status(200).json(category);
});

/** BASERT PÅ FORELESERS EKSEMPLER
 * API controller funksjon for å liste ut kategorirer. Håndterer promises
 * via mellomvare. Kast en 200 (OK) sammen med resultatene.
 */
export const list = catchAsyncErrors(async (req, res, next) => {
  const result = await categoryService.listCategorys();
  res.status(200).json(result);
});

/** BASERT PÅ FORELESERS EKSEMPLER
 * API controller funksjon for å lage en kategori. Håndterer promises
 * via mellomvare. Kast en 201 (Created) sammen laget kategori.
 */
export const create = catchAsyncErrors(async (req, res, next) => {
  const category = await categoryService.createCategory(req.body);
  res.status(201).json(category);
});
