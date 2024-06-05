import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/home/Navbar';
import Landing from './components/home/Landing';
// import Prototypes from './components/prototypes/PrototypeHome.js';
import './index.css'
// home/src/components/prototypes
// import Applications from './components/apps/AppLanding.js';
// home / src / components / apps / smartcalendar / AppLanding.js
import AppRoutes from './components/apps/AppRoutes';
import PrototypeRoutes from './components/prototypes/PrototypeRoutes';
import Footer from './components/home/Footer';
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/prototypes" element={<Prototypes />} /> */}
        {/* <Route path="/applications" element={<Applications />} /> */}
        <Route path="/applications/*" element={<AppRoutes />} />
        <Route path="/prototypes/*" element={<PrototypeRoutes />} />
      </Routes>
      <Footer />
    </Router>
  );
}
