import express from 'express';
import { getUserProfile, updateUserProfile, registerUser } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Get logged-in user's profile (protected route) and update user profile
router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);
router.post('/register', registerUser);

export default router;
