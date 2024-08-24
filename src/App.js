import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Hero from "./components/Hero";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
