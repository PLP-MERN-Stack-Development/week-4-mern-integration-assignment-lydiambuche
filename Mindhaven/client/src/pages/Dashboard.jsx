import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Welcome Back!</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white rounded-2xl shadow p-5">
          <h2 className="text-xl font-semibold mb-2">Your Progress</h2>
          <p>Journal streak: 4 days</p>
          <p>Goals completed: 3</p>
        </div>

      
        <div className="bg-white rounded-2xl shadow p-5">
          <h2 className="text-xl font-semibold mb-2">Mood Overview</h2>
          <p>Last 7 days: 😊 😐 😔 😊 😊 😕 😄</p>
        </div>

      
        <div className="bg-white rounded-2xl shadow p-5">
          <h2 className="text-xl font-semibold mb-2">Your Goals</h2>
          <ul className="list-disc ml-5">
            <li>Daily journaling</li>
            <li>Drink 2L water</li>
            <li>Meditate 5 mins</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
