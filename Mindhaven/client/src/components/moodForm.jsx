import { useState } from 'react';
import API from '../utils/api';

const MoodForm = ({ userId, onMoodAdded }) => {
  const [mood, setMood] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/moods', { userId, mood, note });
      setMood('');
      setNote('');
      onMoodAdded();
    } catch (err) {
      console.error('Error submitting mood:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded">
      <select value={mood} onChange={(e) => setMood(e.target.value)} required className="mb-2 w-full p-2 border">
        <option value="">Select Mood</option>
        <option value="happy">😊 Happy</option>
        <option value="sad">😢 Sad</option>
        <option value="anxious">😟 Anxious</option>
        <option value="calm">😌 Calm</option>
        <option value="angry">😠 Angry</option>
        <option value="neutral">😐 Neutral</option>
      </select>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Optional note..."
        className="w-full p-2 border mb-2"
      />
      <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">Add Mood</button>
    </form>
  );
};

export default MoodForm;
