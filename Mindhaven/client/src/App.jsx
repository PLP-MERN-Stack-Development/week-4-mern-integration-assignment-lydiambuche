import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Journal from './pages/journal.jsx';
import Progress from './pages/progress.jsx';
import Home from "./pages/home.jsx";
import Meditation from "./pages/meditation.jsx";
import Navbar from "./components/navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Dashboard />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/meditation" element={<Meditation />} />
      </Routes>
    </Router>
  );
}

export default App;
