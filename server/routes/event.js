import express from 'express';
import { eventController } from '../controllers/index.js';

const router = express.Router();

router.get('/:id', eventController.get);
router.get('/', eventController.list);
router.post('/', eventController.create);
router.put('/:id', eventController.update);
router.delete('/:id', eventController.remove);

export default router;
