import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Features from './pages/Features';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/Features" element={<Features />} />
        <Route path="/pages/About" element={<About />} />
        <Route path="/pages/Contact" element={<Contact />} />
        <Route path="/pages/Login" element={<Login />} />
        <Route path="/pages/SignUp" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
