import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Features from './pages/Features';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import StockDetails from "./pages/StockDetails"
import StockContext from './context/StockContext';

function App() {

  const [stockSymbol, setStockSymbol] = useState("MSFT");

  return (
    <Router>
      <StockContext.Provider value={{stockSymbol, setStockSymbol}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/Features" element={<Features />} />
        <Route path="/pages/About" element={<About />} />
        <Route path="/pages/Contact" element={<Contact />} />
        <Route path="/pages/Login" element={<Login />} />
        <Route path="/pages/SignUp" element={<SignUp />} />
        <Route path="/StockDetails" element ={<StockDetails/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      </StockContext.Provider>
      </Router>
  );
}

export default App;