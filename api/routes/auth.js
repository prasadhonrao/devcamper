import express from 'express';
import { register, login, getMe, forgotPassword } from '../controllers/auth.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/me').get(protect, getMe);
router.route('/forgotpassword').post(forgotPassword);

export default router;
