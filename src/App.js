import './App.css';
import img from './hamish.png';
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route basename={process.env.PUBLIC_URL} path="home" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
         <div className='footer'></div>
    </div>
 
  );
}

export default App;
