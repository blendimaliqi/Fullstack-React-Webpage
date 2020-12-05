import express from 'express';
import { currentUser } from '../controllers/auth.js';
import { articleController } from '../controllers/index.js';
import { isAuthenticated, isAuthorized } from '../middleware/auth.js';

const router = express.Router();

router.get('/:id', articleController.get);


//router.get('/', articleController.listHidden);


router.get('/', articleController.listAllArticles);


router.post(
  '/',
  isAuthenticated,
  isAuthorized('admin'),
  articleController.create
);
router.put('/:id', articleController.update);
router.delete('/:id', articleController.remove);

export default router;
