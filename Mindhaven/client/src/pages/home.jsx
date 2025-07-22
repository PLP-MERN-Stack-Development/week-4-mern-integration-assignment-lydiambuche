import React from "react";
import { Link } from "react-router-dom";

const features = [
  { title: "📝 Journaling", desc: "Capture your thoughts and reflect daily." },
  { title: "🧘 Meditation", desc: "Relax with guided meditations & breathwork." },
  { title: "📊 Mood Tracking", desc: "Track your emotions & discover trends." },
  { title: "🤝 Community", desc: "Connect with others on your wellness journey." },
];

const benefits = [
  "Reduced stress and anxiety",
  "Improved mental clarity and focus",
  "Enhanced self-awareness and self-care",
];

const Home = () => {
  return (
    <div className="flex flex-col gap-12 px-4 py-10 md:px-20 text-gray-800">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-green-600">Welcome to MindHaven </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Your safe space to journal, meditate, and nurture your mental wellbeing.
        </p>
        <Link
          to="/login"
          className="inline-block bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition"
        >
          Get Started
        </Link>
      </section>

      {/* Features Section */}
      <section className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">✨ Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-600">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">💚 Why MindHaven?</h2>
        <ul className="space-y-4 max-w-xl mx-auto text-left">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-2xl">✅</span>
              <p className="text-gray-700">{benefit}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
