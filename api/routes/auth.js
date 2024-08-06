import express from 'express';
import { register } from '../controllers/auth.js';

const router = express.Router();

router.route('/register').post(register);

export default router;
