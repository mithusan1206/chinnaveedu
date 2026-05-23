import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu, Lesentrees, Lesplats, Aboire, Lesdesserts, Reservation } from './container';
import { Navbar } from './components';
import './App.css';
import { GiKingJuMask } from 'react-icons/gi';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div>
      <Navbar />
      <Header />
      <Lesentrees/>
      <Lesplats/>
      <Chef />
      <SpecialMenu/>
      <Aboire/>
      <Lesdesserts/>
      <AboutUs />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
};

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/reservation" element={<Reservation />} />
  </Routes>
);

export default App;

// CTRL + / = comment out code
// CTRL + Y = delete line
// CTRL + SHIFT + K = delete line
// CTRL + SHIFT + D = duplicate line
// ALT + UP/DOWN = move line up/down

// CTRL + Z = undo
// CTRL + SHIFT + Z = redo
// CTRL + S = save
// CTRL + F = find
// CTRL + H = replace
// CTRL + SHIFT + F = find in files
// CTRL + SHIFT + H = replace in files
//  npm staret = run the app
//  npm install = install dependencies
//  npm install react-icons = install react icons
//  Ctrl + C = STOP SERVER