import express from 'express';
import {authController} from '../controllers/index.js'

//implementer auth middleware senere
const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);


export default router;