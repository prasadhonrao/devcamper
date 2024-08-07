import express from 'express';
import {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
  getBootcampsInRadius,
  testGeocode,
  uploadBootcampPhoto,
} from '../controllers/bootcamps.js';

import advancedResults from '../middleware/advancedResults.js';
import Bootcamp from '../models/Bootcamp.js';

// Include other resource routers
import courseRouter from './courses.js';

import { protect } from '../middleware/auth.js';

const router = express.Router();

// Re-route into other resource routers
router.use('/:bootcampId/courses', courseRouter);

router.route('/testgeocode').post(testGeocode);
router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius);
router.route('/:id/photo').put(protect, uploadBootcampPhoto);
router
  .route('/')
  .get(
    advancedResults(Bootcamp, {
      path: 'courses',
      select: 'title description',
    }),
    getBootcamps
  )
  .post(protect, createBootcamp);
router.route('/:id').get(getBootcamp).put(protect, updateBootcamp).delete(protect, deleteBootcamp);

export default router;
