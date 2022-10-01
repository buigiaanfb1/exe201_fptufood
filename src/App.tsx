import React from 'react';
import {
  BrowserRouter as Router, Routes,
  Route, Link
} from 'react-router-dom';


import './App.css';
import LoginPage from './app/pages/LoginPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />}>                     
          </Route>
        </Routes>
      </Router>,
    </div>
  );
}

export default App;
