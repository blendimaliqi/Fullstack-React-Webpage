import express from 'express';
import { mailController } from '../controllers/index.js';
import { isAuthenticated } from '../middleware/auth.js';

const router = express.Router();

router.post('/', mailController.sendUserMail);

export default router;