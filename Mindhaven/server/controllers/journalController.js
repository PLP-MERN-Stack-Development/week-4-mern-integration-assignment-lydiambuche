import Journal from '../models/journal.js';

// Create new journal entry
export const createJournal = async (req, res) => {
  try {
    const newJournal = new Journal(req.body);
    const saved = await newJournal.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get journals by user ID
export const getJournalsByUser = async (req, res) => {
  try {
    const journals = await Journal.find({ userId: req.params.userId }).sort({ date: -1 });
    res.json(journals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
