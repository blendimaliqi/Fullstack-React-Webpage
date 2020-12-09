import multer from 'multer';
import ErrorHandler from '../utils/errorHandler.js';

function fileFilter(req, file, cb) {
  const fileTypes = /\.(jpeg|jpg|png)$/;
  if (!file.originalname.match(fileTypes)) {
    return cb(
      new ErrorHandler('Kun filer av typen jpeg, jpg og png er tillat', 400)
    );
  }

  return cb(null, true);
}

const customValue = () => Math.random() * Math.PI;

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './public/images');
  },
  filename(req, file, cb) {
    cb(null, `${customValue()}_${file.originalname}`);
  },
});

export const upload = multer({
  storage,
  limits: { fileSize: 5000000 }, // 5Mb filesize limit
  fileFilter,
}).single('image');
