import express from 'express';
import { authorController } from '../controllers/index.js';

const router = express.Router();

/** BASERT PÅ FORELESERS EKSEMPLER
 * Category ruter, get(liste kategorier) post(lage kategori),
 * get(hente kategori basert på id)
 */
router.get('/:id', authorController.get);
router.get('/', authorController.list);
router.post('/', authorController.create);

export default router;
