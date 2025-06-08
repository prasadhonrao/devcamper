import express from 'express';
import {
  register,
  login,
  logout,
  getMe,
  forgotPassword,
  resetPassword,
  updateDetails,
  updatePassword,
  enrollBootcamp,
  withdrawEnrollment,
  getEnrollments
} from '../controllers/user.js';
import { authorize, protect } from '../middleware/auth.js';

const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logout').post(logout);
router.route('/me').get(protect, getMe);
router.route('/updatedetails').put(protect, updateDetails);
router.route('/updatepassword').put(protect, updatePassword);
router.route('/forgotpassword').post(forgotPassword);
router.route('/resetpassword/:resettoken').put(resetPassword);
router.route('/bootcamp/:bootcampId/enrollment').put(protect, enrollBootcamp);
router.route('/withdraw/:bootcampId/enrollment').put(protect, authorize('user'), withdrawEnrollment);
router.route('/enrollments').get(protect, getEnrollments);

export default router;
