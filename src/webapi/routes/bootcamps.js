import express from 'express';
import {
  getBootcamps,
  getBootcampsByPublisher,
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
import reviewRouter from './reviews.js';

import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

// Re-route into other resource routers
router.use('/:bootcampId/courses', courseRouter);
router.use('/:bootcampId/reviews', reviewRouter);

router.route('/testgeocode').post(testGeocode);
router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius);
router.route('/:id/photo').put(protect, authorize('publisher', 'admin'), uploadBootcampPhoto);
router.route('/publisher/:publisherId').get(
  protect,
  authorize('publisher', 'admin'),
  (req, res, next) => {
    req.query.user = req.params.publisherId; // Set the user query parameter
    next();
  },
  advancedResults(Bootcamp),
  getBootcampsByPublisher
);
router
  .route('/')
  .get(
    advancedResults(Bootcamp, {
      path: 'courses',
      select: 'title description',
    }),
    getBootcamps
  )
  .post(protect, authorize('publisher', 'admin'), createBootcamp);
router
  .route('/:id')
  .get(getBootcamp)
  .put(protect, authorize('publisher', 'admin'), updateBootcamp)
  .delete(protect, authorize('publisher', 'admin'), deleteBootcamp);

export default router;
