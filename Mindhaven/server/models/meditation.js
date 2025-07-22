import mongoose from 'mongoose';

const meditationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  audioUrl: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['meditation', 'relaxation', 'sleep', 'breathing'],
    default: 'meditation',
  },
  duration: {
    type: Number, // in minutes
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }
}, { timestamps: true });

export default mongoose.model('Meditation', meditationSchema);
