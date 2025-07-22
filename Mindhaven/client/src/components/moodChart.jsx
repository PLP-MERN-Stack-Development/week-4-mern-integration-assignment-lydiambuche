import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
  { date: 'Mon', mood: 3 },
  { date: 'Tue', mood: 5 },
  { date: 'Wed', mood: 2 },
  { date: 'Thu', mood: 4 },
  { date: 'Fri', mood: 3 },
  { date: 'Sat', mood: 4 },
  { date: 'Sun', mood: 5 },
];

const MoodChart = () => {
  return (
    <div className="w-full h-64 md:h-80 p-4 bg-white rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">Weekly Mood Tracker</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={[0, 5]} />
          <Tooltip />
          <Line type="monotone" dataKey="mood" stroke="#4F46E5" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MoodChart;
