import express from 'express';
import { getBootcamps, getBootcamp, createBootcamp, updateBootcamp, deleteBootcamp } from '../controllers/bootcamps.js';

const router = express.Router();

router.get('/', getBootcamps);
router.get('/:id', getBootcamp);
router.post('/', createBootcamp);
router.put('/:id', updateBootcamp);
router.delete('/:id', deleteBootcamp);

export default router;
