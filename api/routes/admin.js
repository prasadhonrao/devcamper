import express from 'express';

import { getUsers, getUser, createUser, updateUser, deleteUser } from '../controllers/admin.js';
import { protect, authorize } from '../middleware/auth.js';
import advancedResults from '../middleware/advancedResults.js';
import User from '../models/User.js';

const router = express.Router();

// Protect all routes below this middleware
router.use(protect);
router.use(authorize('admin'));

router.route('/users').get(advancedResults(User), getUsers).post(createUser);
router.route('/users/:id').get(getUser).put(updateUser).delete(deleteUser);

export default router;
