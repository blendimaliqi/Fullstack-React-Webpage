import express from 'express';
import { mailController } from '../controllers/index.js';
import { isAuthenticated, isAuthorized } from '../middleware/auth.js';

const router = express.Router();

/**
 * Mail ruter, get(list mails) post(sende mail til admin),
 * post(sende mail til bruker)
 */
router.post('/', mailController.sendUserMail);
router.post('/adminmail', mailController.sendAdminMail);
router.get('/', mailController.list);

export default router;
