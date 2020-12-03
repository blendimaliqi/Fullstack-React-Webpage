import express from 'express';
import { categoryController } from '../controllers/index.js';
import { isAuthenticated } from '../middleware/auth.js';

const router = express.Router();

router.get('/:id', categoryController.get);
router.get('/', categoryController.list);
router.post('/', isAuthenticated, categoryController.create);

export default router;
