import express from 'express';
import { addMood, getMoodsByUser } from '../controllers/moodController.js'
const router = express.Router();

router.post('/', addMood);
router.get('/:userId', getMoodsByUser);


export default router;
