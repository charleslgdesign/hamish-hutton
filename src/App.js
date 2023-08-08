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
      <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
   {/* <body>
  
    <div className='grid'>
    <div className='grid-item'>
        <img class='image' src={img} className="hamish" alt="logo" />
      </div>
        <div className='grid-item'>
        My name is hamish and I'm an aspiring artist, based from Te Whanganui A Tara <br/><br/>
         <Link to="/about">About</Link>
    </div>
    </div>
         </body> */}
         <div className='footer'></div>
    </div>
 
  );
}

export default App;
