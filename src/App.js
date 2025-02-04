import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Nav from './components/layout/nav';
import Turqi from './components/Turqi/Turqi';


import Bullgari from './components/Bullgari/Bullgari';
import Greqi from './components/Greqi/Greqi';
import FestateFundvitit from './components/FestaFundVitit/FestateFundvitit';
import VisitKosova from './components/VisitKosova/VisitKosova';



const App = () => {
  return (
    <Router>
      <div>
        <Routes>
         
        <Route path="/" element={<Home />} />
            <Route path="/turqi" element={<Turqi />} />
            <Route path="/bullgari" element={<Bullgari />} />
            <Route path="/greqi" element={<Greqi />} />
            <Route path="/VisitKosova" element={<VisitKosova />} />
            
            <Route path="/festateFundvitit" element={<FestateFundvitit />} />
          

        </Routes>
      </div>
    </Router>
  );
};

export default App;
