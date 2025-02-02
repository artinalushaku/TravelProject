import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Nav from './components/layout/nav';
import Turqi from './components/Turqi/Turqi';



const App = () => {
  return (
    <Router>
      <div>
        <Routes>
         
          <Route path="/nav" element={<Nav />} />
          <Route path="/" element={<Home />} />
          <Route path="/turqi" element={<Turqi />} />
          

        </Routes>
      </div>
    </Router>
  );
};

export default App;
