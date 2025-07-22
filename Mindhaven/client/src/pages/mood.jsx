import React from "react";
import MoodChart from "../components/moodChart.jsx";
import MoodForm from "../components/moodForm.jsx";

const Mood = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Mood Tracker</h1>
      <MoodForm />
      <MoodChart />
    </div>
  );
};

export default Mood;
