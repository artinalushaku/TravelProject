import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Login from './components/LoginRegister/Login';
import Register from './components/LoginRegister/Register';
import './App.css';
import Turqi from './components/Turqi/Turqi';
import Bullgari from './components/Bullgari/Bullgari';
import Greqi from './components/Greqi/Greqi';
import Maqedoni from './components/Maqedoni/Maqedoni';

import FestateFundvitit from './components/FestaFundVitit/FestateFundvitit';
import EuropeCityBreak from './components/EuropeCity/EuropeCityBreak';
import Nav from './components/layout/nav';

import Dubai from './components/Dubai/Dubai';
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
            <Route path="/Kontakt" element={<kontakt />} />
            <Route path="/maqedoni" element={<Maqedoni />} />
            <Route path="/festateFundvitit" element={<FestateFundvitit />} />
            <Route path="/europecitybreak" element={<EuropeCityBreak />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
