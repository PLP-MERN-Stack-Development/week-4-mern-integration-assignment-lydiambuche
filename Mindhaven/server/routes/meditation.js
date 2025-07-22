import express from 'express';
import { getAllMeditations, getMeditationById, createMeditation,} from '../controllers/meditationController.js';
import { protect, isAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .get(getAllMeditations)
  .post(protect, isAdmin, createMeditation);

router.route('/:id').get(getMeditationById);

export default router;