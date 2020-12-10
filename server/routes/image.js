import express from 'express';
import { imageController } from '../controllers/index.js';
import { upload } from '../middleware/image.js';
import { isAuthenticated, isAuthorized } from '../middleware/auth.js';

const router = express.Router();

/** GJENBRUKT FRA FORELESERS EKSEMPLER
 * Image ruter, get(download) og post(upload)
 */
const roles = ['admin', 'superadmin'];
router.get('/download/:id', imageController.get);
router.post(
  '/upload',
  isAuthenticated,
  isAuthorized(roles),
  upload,
  imageController.create
);

export default router;
