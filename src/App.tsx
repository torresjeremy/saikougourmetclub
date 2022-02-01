import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/home';

const App: React.FC = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </div>
);

export default App;
