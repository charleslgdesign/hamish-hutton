import '../App.css';
import * as React from 'react';
import img from '../hamish.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




function Home() {

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
        My name is hamish and I'm an aspiring artist, based from Te Whanganui A Tara <br/><br/>
         <Link to="/about"><b>About</b> </Link>
    </div>
    </div>
         </body>
    </div>
      

        
    );
  }
  
  export default Home;
