import React from "react";

const meditations = [
  {
    title: "Morning Calm",
    desc: "Start your day with peace and clarity.",
    audio: "https://example.com/audio/morning-calm.mp3",
  },
  {
    title: "Evening Wind Down",
    desc: "Relax and release tension before bed.",
    audio: "https://example.com/audio/evening-wind.mp3",
  },
  {
    title: "Deep Focus",
    desc: "Refocus your mind for deep work or study.",
    audio: "https://example.com/audio/deep-focus.mp3",
  },
];

const Meditation = () => {
  return (
    <div className="px-4 py-10 md:px-20 space-y-12 text-gray-800">
      {/* Intro */}
      <section className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-green-600">
          Meditation Room 🧘‍♀️
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-600">
          Find your calm, focus your breath, and reconnect with yourself.
        </p>
      </section>

      {/* Guided Meditations */}
      <section>
        <h2 className="text-2xl font-semibold text-center mb-6">
          🎧 Guided Sessions
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {meditations.map((session, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow rounded-lg space-y-3 text-center"
            >
              <h3 className="text-lg font-bold text-green-600">{session.title}</h3>
              <p className="text-gray-600">{session.desc}</p>
              <audio controls className="w-full mt-2">
                <source src={session.audio} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          ))}
        </div>
      </section>

      {/* Breathing Exercise */}
      <section className="text-center px-4">
        <h2 className="text-2xl font-semibold mb-4">🌬️ Breathing Circle</h2>
        <p className="text-gray-600 mb-4">Breathe in... Hold... Breathe out...</p>
        <div className="mx-auto w-32 h-32 rounded-full bg-green-300 animate-pulse"></div>
      </section>

      {/* Daily Quote */}
      <section className="text-center mt-10 px-4">
        <blockquote className="italic text-gray-700 text-lg max-w-xl mx-auto">
          “Almost everything will work again if you unplug it for a few minutes, including you.”
        </blockquote>
        <p className="mt-2 text-sm text-gray-500">— Anne Lamott</p>
      </section>
    </div>
  );
};

export default Meditation;
