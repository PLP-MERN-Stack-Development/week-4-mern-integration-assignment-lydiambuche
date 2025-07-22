import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Mood emoji options
const moodOptions = [
  { emoji: "😞", value: 2, label: "Sad" },
  { emoji: "😐", value: 5, label: "Neutral" },
  { emoji: "😊", value: 7, label: "Happy" },
  { emoji: "😄", value: 9, label: "Excited" },
];

const Progress = () => {
  const [moodData, setMoodData] = useState([]);
  const [selectedMood, setSelectedMood] = useState(null);

  // Load mood data from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("moodData");
    if (saved) {
      setMoodData(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage whenever moodData changes
  useEffect(() => {
    localStorage.setItem("moodData", JSON.stringify(moodData));
  }, [moodData]);

  // Add new mood
  const handleAddMood = () => {
    if (!selectedMood) return;
    const newEntry = {
      date: new Date().toLocaleDateString("en-GB"), // format: DD/MM/YYYY
      mood: selectedMood.value,
      emoji: selectedMood.emoji,
    };
    setMoodData((prev) => [...prev, newEntry]);
    setSelectedMood(null);
  };

  return (
    <div className="p-6 space-y-10 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-center">Track Your Mood 🧠</h2>

      {/* Mood input form */}
      <div className="bg-white rounded-lg shadow p-4 space-y-4">
        <p className="text-lg font-medium">How do you feel today?</p>
        <div className="flex space-x-4">
          {moodOptions.map((mood) => (
            <button
              key={mood.label}
              className={`text-3xl p-2 rounded-full border-2 ${
                selectedMood?.value === mood.value
                  ? "border-green-500"
                  : "border-gray-300"
              } hover:border-green-400`}
              onClick={() => setSelectedMood(mood)}
            >
              {mood.emoji}
            </button>
          ))}
        </div>
        <button
          onClick={handleAddMood}
          disabled={!selectedMood}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Save Mood
        </button>
      </div>

      {/* Mood chart */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-semibold mb-2">Mood Over Time</h3>
        {moodData.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={moodData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[0, 10]} />
              <Tooltip />
              <Line type="monotone" dataKey="mood" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-gray-500">No mood entries yet.</p>
        )}
      </div>
    </div>
  );
};

export default Progress;
