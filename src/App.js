import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Register from './components/Register';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
         
          <Route path="/nav" element={<Nav />} />
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
