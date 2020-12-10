import { articleService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';
import Article from '../models/article.js';

/** BASERT PÅ FORELESERS EKSEMPLER
 * API controller funksjon for å hente artikkel basert på id. Håndterer
 * promises via mellomvare. Når artikkel blir hentet, skal clicks på
 * artikkel øke med 1 (for statistik). Hvis artikkel ikke finnes kast
 * en 404 (not found) med error melding. Ellers kast en 200 (OK) sammen
 * med artikkel- og click data.
 */
export const get = catchAsyncErrors(async (req, res, next) => {
  const clicks = await Article.updateOne(
    { _id: { $eq: req.params.id } },
    { $inc: { clicks: 1 } }
  );

  const article = await articleService.getArticleById(req.params.id);

  if (!article) {
    return next(
      new ErrorHandler(`Finner ikke Article med ${req.params.id}`, 404)
    );
  }
  res.status(200).json({
    success: true,
    dataArticle: article,
    dataClicks: clicks,
  });
});

/** BASERT PÅ FORELESERS EKSEMPLER
 * API controller funksjon for å liste ut alle artikler. Håndterer
 * promises via mellomvare. Tar i mot query parametere, siden vi bruker
 * filter, search og paginering. Kast en 200(OK) sammen med resultatene.
 */
export const listAllArticles = catchAsyncErrors(async (req, res, next) => {
  const result = await articleService.listArticles(req.query);
  res.status(200).json({ success: true, data: result });
});

/** BASERT PÅ FORELESERS EKSEMPLER
 * API controller funksjon for å lage en artikkel. Håndterer promises via mellomvare. 
 * Kast en 201(Created) sammen med resultat av aggrering.
 */
export const create = catchAsyncErrors(async (req, res, next) => {
  const article = await articleService.createArticle(req.body);
  res.status(201).send(article);
});

/** BASERT PÅ FORELESERS EKSEMPLER
 * API controller funksjon for å oppdatere en artikkel. Håndterer promises via mellomvare.
 * Henter artikkel via id, om den ikke finnes kast en 404 (not found) med error melding).
 * Ellers kjør en update på funnet artikkel og ast en 200(OK) sammen med oppdater artikkel.
 */
export const update = catchAsyncErrors(async (req, res, next) => {
  let article = await articleService.getArticleById(req.params.id);
  if (!article) {
    return next(
      new ErrorHandler(`Finner ikke Article med ${req.params.id}`, 404)
    );
  }
  article = await articleService.updateArticle(req.params.id, req.body);
  res.status(200).json(article);
});

/** BASERT PÅ FORELESERS EKSEMPLER
 * API controller funksjon for å slette en artikkel. Håndterer promises via mellomvare.
 * Henter artikkel via id, om den ikke finnes kast en 404 (not found) med error melding).
 * Ellers kjør en delete på funnet artikkel og ast en 204(No content).
 */
export const remove = catchAsyncErrors(async (req, res, next) => {
  let article = await articleService.getArticleById(req.params.id);
  if (!article) {
    return next(
      new ErrorHandler(`Finner ikke Article med ${req.params.id}`, 404)
    );
  }
  article = await articleService.removeArticle(req.params.id);
  res.status(204).json({});
});

/* export const updateClicks = catchAsyncErrors(async (req, res, next) => {
  const clicks = await Article.updateMany(
    { _id: { $in: req.body } },
    { $inc: { clicks: 1 } }
  );
  res.status(200).json(clicks);
}); */
