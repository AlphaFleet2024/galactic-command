import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Dashboard from "./components/Dashboard";
import ShipList from "./components/ShipList";
import Game from "./components/Game";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ships" element={<ShipList />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
