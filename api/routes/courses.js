import express from 'express';
import { getCourses, getCourse, addCourse, updateCourse, deleteCourse } from '../controllers/courses.js';

const router = express.Router({ mergeParams: true });

router.route('/').get(getCourses).post(addCourse);
router.route('/:id').get(getCourse).put(updateCourse).delete(deleteCourse);

export default router;
