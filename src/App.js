import React from 'react';
import './App.css';
import Home from './pages/Home';
import Header from'./components/Header';
import FourOhFour from './pages/FourOhFour';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutMe />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='*' element={<FourOhFour />} />
      </Routes>
    </>
  );
}

export default App;
