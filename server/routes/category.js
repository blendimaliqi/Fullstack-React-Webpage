import express from 'express';
import { categoryController } from '../controllers/index.js';

const router = express.Router();

/** BASERT PÅ FORELESERS EKSEMPLER
 * Category ruter, get(liste kategorier) post(lage kategori),
 * get(hente kategori basert på id)
 */
router.get('/:id', categoryController.get);
router.get('/', categoryController.list);
router.post('/', categoryController.create);

export default router;
