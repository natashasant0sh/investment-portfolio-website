import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Features from './pages/Features';
import News from './pages/News';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Portfolio from './pages/Portfolio';
import StockDetails from "./pages/StockDetails"
import StockContext from './context/StockContext';
import UserContext from './context/UserContext';

function App() {

  const [stockSymbol, setStockSymbol] = useState("MSFT");
  const [userState, setUserState] = useState(null);

  return (
    <Router>
      <UserContext.Provider value={{ userState, setUserState }}>
      <StockContext.Provider value={{stockSymbol, setStockSymbol}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/Features" element={<Features />} />
        <Route path="/pages/News" element={<News />} />
        <Route path="/pages/Contact" element={<Contact />} />
        <Route path="/pages/Login" element={<Login />} />
        <Route path="/pages/SignUp" element={<SignUp />} />
        <Route path="/StockDetails" element ={<StockDetails/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pages/Portfolio" element={<Portfolio />} />

      </Routes>
      </StockContext.Provider>
      </UserContext.Provider>
      </Router>
  );
}

export default App;
