import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
         
          <Route path="/nav" element={<Nav />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
