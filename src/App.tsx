import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import AboutUs from './app/pages/AboutUs/AboutUs';
import ContactUs from './app/pages/ContactUs.tsx/ContactUs';
import HomePage from './app/pages/home/HomePage';
import LoginPage from './app/pages/LoginPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<LoginPage />}></Route> */}
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/aboutUs" element={<AboutUs />}></Route>
          <Route path="/contactUs" element={<ContactUs />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
