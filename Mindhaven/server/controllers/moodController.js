import Mood from '../models/mood.js';

export const addMood = async (req, res) => {
  try {
    const mood = new Mood(req.body);
    const saved = await mood.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getMoodsByUser = async (req, res) => {
  try {
    const moods = await Mood.find({ userId: req.params.userId }).sort({ date: -1 });
    res.json(moods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
