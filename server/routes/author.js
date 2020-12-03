import express from 'express';
import { authorController } from '../controllers/index.js';

const router = express.Router();

router.get('/:id', authorController.get);
router.get('/', authorController.list);
router.post('/', authorController.create);

export default router;
