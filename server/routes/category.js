import express from 'express';
import { categoryController } from '../controllers/index.js';
import { isAuthenticated, isAuthorized } from '../middleware/auth.js';

const router = express.Router();

/** BASERT PÅ FORELESERS EKSEMPLER
 * Category ruter, get(liste kategorier) post(lage kategori),
 * get(hente kategori basert på id)
 */
const roles = ['admin', 'superadmin'];
router.get('/:id', categoryController.get);
router.get('/', categoryController.list);
router.post(
  '/',
  isAuthenticated,
  isAuthorized(roles),
  categoryController.create
);

export default router;
