import express from 'express';
import { getCourses, getCourse, addCourse, updateCourse, deleteCourse } from '../controllers/courses.js';
import Course from '../models/Course.js';
import advancedResults from '../middleware/advancedResults.js';
import { protect } from '../middleware/auth.js';

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(
    advancedResults(Course, {
      path: 'bootcamp',
      select: 'name description',
    }),
    getCourses
  )
  .post(protect, addCourse);
router.route('/:id').get(getCourse).put(protect, updateCourse).delete(protect, deleteCourse);

export default router;
