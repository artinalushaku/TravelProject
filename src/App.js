import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
         
          <Route path="/nav" element={<Nav />} />
          <Route path="/" element={<Home />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
