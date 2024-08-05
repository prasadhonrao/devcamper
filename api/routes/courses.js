import express from 'express';
import { getCourses, getCourse } from '../controllers/courses.js';

const router = express.Router({ mergeParams: true });

router.route('/').get(getCourses);
router.route('/:id').get(getCourse);

export default router;
