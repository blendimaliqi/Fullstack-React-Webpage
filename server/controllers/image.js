import path from 'path';
import { imageService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';

export const get = catchAsyncErrors(async (req, res, next) => {
  const image = await imageService.getImageById(req.params.id);

  if (!image) {
    return next(
      new ErrorHandler(`Finner ikke bilde med angitt id: ${req.params.id}`, 404)
    );
  }

  console.log(image);

  const imagePath = image.file_path.replace('public', '');
  res.status(200).json({
    success: true,
    data: { image, imagePath },
  });
});

export const create = catchAsyncErrors(async (req, res, next) => {
  if (!req.file) {
    return next(
      new ErrorHandler(
        'Vennligst last opp fil av typen jpeg, jpg eller png',
        400
      )
    );
  }

  const image = await imageService.uploadImage(req.file);
  res.status(201).json({
    success: true,
    data: image,
  });
});
