// App.js
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import AboutMe from './combinedComponent/AboutMe';
import HomePage from './combinedComponent/HomePage';
import Portfolio from './combinedComponent/Portfolio';

function App() {
    const [theme, setTheme] = useState('light');
  
    useEffect(() => {
      const root = document.documentElement;
      if (theme === 'dark') {
        root.classList.add('dark-mode');
      } else {
        root.classList.remove('dark-mode');
      }
    }, [theme]);
  

  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} ></Route>
        <Route path='/overview/aboutme' element={<AboutMe />} ></Route>
        <Route path='/overview/portfolio' element={<Portfolio />} ></Route>


      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
