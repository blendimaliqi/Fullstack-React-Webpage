import { articleService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';
import Article from '../models/article.js';
import { currentUser } from './auth.js';

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

export const listAllArticles = catchAsyncErrors(async (req, res, next) => {
  const result = await articleService.listArticles(req.query);
  res.status(200).json({ success: true, data: result });
});

/* export const listHidden = catchAsyncErrors(async (req, res, next) => {
  const result = await articleService.listArticles();

  const hiddenArticles = [];

  const plebArticles = [];

  result.map((r) => {
      hiddenArticles.push(r);
    }
  );

  hiddenArticles.map((hidden) => {
    if(!hidden.secret){
      plebArticles.push(hidden);
    };
  })

  console.log(hiddenArticles.length);

  res.status(200).json(plebArticles);
});
*/

export const getClicksOnArticle = catchAsyncErrors(async (req, res, next) => {
  const articleClicks = await articleService.articleClicks();
  res.status(200).json({
    success: true,
    data: articleClicks,
  });
});


export const create = catchAsyncErrors(async (req, res, next) => {
  const article = await articleService.createArticle(req.body);
  res.status(201).json(article);
});

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


/*export const updateClicks = catchAsyncErrors(async (req, res, next) => {
  const clicks = await Article.updateMany(
    { _id: { $in: req.body } },
    { $inc: { clicks: 1 } }
  );
  res.status(200).json(clicks);
});*/