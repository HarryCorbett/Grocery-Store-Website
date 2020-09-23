import React, { useRef } from 'react';
import './App.css';
import NavBar from './NavBar';

function App() {
  return (
      <div className='App'>

        <div className='navbar'><NavBar /></div>

        <div className='parallax'>
          <div className='parallax-text'>Lower Common Road Stores<br></br>West Wellow</div>
        </div>

        <div id='about'></div>
        <div className='about'>
          <h2 className='heading'>About</h2>
          <div>about</div>
        </div>

      </div>
  );
}

export default App;
