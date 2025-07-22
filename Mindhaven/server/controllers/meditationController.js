import Meditation from '../models/meditation.js';
import asyncHandler from 'express-async-handler';

// @desc    Get all meditation content
export const getAllMeditations = asyncHandler(async (req, res) => {
  const meditations = await Meditation.find();
  res.json(meditations);
});

// @desc    Get single meditation
export const getMeditationById = asyncHandler(async (req, res) => {
  const meditation = await Meditation.findById(req.params.id);
  if (meditation) {
    res.json(meditation);
  } else {
    res.status(404);
    throw new Error('Meditation not found');
  }
});

// @desc    Add new meditation (admin only)
export const createMeditation = asyncHandler(async (req, res) => {
  const { title, description, audioUrl, category, duration } = req.body;

  const meditation = new Meditation({
    title,
    description,
    audioUrl,
    category,
    duration,
    createdBy: req.user._id,
  });

  const created = await meditation.save();
  res.status(201).json(created);
});
