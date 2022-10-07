import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import HomePage from './app/pages/home/HomePage';
import LoginPage from './app/pages/LoginPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
