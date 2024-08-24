import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
function App() {
  return (
    <Router>
      <div>
        <Sidebar />
        <Hero />
        <Routes>{/* <Route /> */}</Routes>
      </div>
    </Router>
  );
}

export default App;
