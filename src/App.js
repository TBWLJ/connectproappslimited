import React, { useEffect } from 'react'
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Company from './pages/Company';
import Solution from './pages/Solution';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from './pages/Contact';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/company" element={<Company/>} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
