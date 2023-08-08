import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import img from '../hamish.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function About() {

    const navigate = useNavigate();

    navigate('/home', { replace: false });

  return (
    <div className="App">
      <div className='sidebar'></div>
   <body>
  
    <div className='grid'>
    <div className='grid-item'>
        <img class='image' src={img} className="hamish" alt="logo" />
      </div>
        <div className='grid-item'>
        <b>love-2.c.you here.</b>
        <br/><br/>
        thank you for being in this space.
        <br/><br/>
        you are always welcome here. this space may be quite empty, 
        but perhaps within these bare walls and living data, you 
        many find time to breath, look up, see the beauty which is 
        currently unfolding around you. i do not wish to add to the 
        bulging mass of information online, merely to share some 
        projects, ideas and artworks.
        <br/><br/>
        take them as they come – or don’t!
        <br/><br/>  
        i do not want to further propagate an already full and 
        consumed mind, nor do i want to add any virtual noise to 
        this online cacophony.
        <br/><br/>
        this space loves you just the way you come to it.
        <br/><br/>
        there will be music, art, poetry and some films… a platter 
        of life. its nice for it all to be served on the same table. 
        eat and drink your fill. there is always more. and always a 
        seat for you.
        <br/><br/>
        make yourself comfy,
        <br/><br/>
        it is nice of you to be HERE
        <br/><br/>
        and I love-2.c.you HERE.
        <br/><br/>
        running water and the sky, remember the earth under your feet.

❤<br/><br/>
         <Link to="/about"><b>Home</b></Link>
    </div>
    </div>
         </body>
    </div>
  );
}

export default About