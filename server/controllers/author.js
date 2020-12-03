import { authorService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';

export const get = catchAsyncErrors(async (req, res, next) => {
  const author = await authorService.getAuthorById(req.params.id);
  if (!author) {
    return next(new ErrorHandler(`Finner author med ${req.params.id}`, 404));
  }
  res.status(200).json(author);
});

export const list = catchAsyncErrors(async (req, res, next) => {
  const result = await authorService.listAuthors();
  res.status(200).json(result);
});

export const create = catchAsyncErrors(async (req, res, next) => {
  const author = await authorService.createAuthor(req.body);
  res.status(201).json(author);
});
