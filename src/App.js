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

        <div className='info'>

          <div className='about' id='about'>
            <h2 className='heading'>About</h2>
            <div>about</div>
          </div>

          <div className='split'>

            <div class='opening-hours' id='hours'>
              <h2 className='heading'>Opening Hours</h2>

              <table className='hours-table'>
                <tr>
                  <th>Monday</th>
                  <th className='col2'>09.00 - 17.00</th>
                </tr>
                <tr>
                  <th>Tuesday</th>
                  <th className='col2'>09.00 - 17.00</th>
                </tr>
                <tr>
                  <th>Wednesday</th>
                  <th className='col2'>09.00 - 17.00</th>
                </tr>
                <tr>
                  <th>Thursday</th>
                  <th className='col2'>09.00 - 17.00</th>
                </tr>
                <tr>
                  <th>Friday</th>
                  <th className='col2'>09.00 - 17.00</th>
                </tr>
                <tr>
                  <th>Saturday</th>
                  <th className='col2'>09.00 - 17.00</th>
                </tr>
                <tr>
                  <th>Sunday</th>
                  <th className='col2'>09.00 - 17.00</th>
                </tr>
              </table>
            </div>

            <div class='location' id='location'>
              <h2 className='heading'>Location</h2>
            </div>

          </div>

          <div class='contact' id='contact'>
              <h2 className='heading'>Contact us</h2>
            </div>

        </div>
      </div>
  );
}

export default App;
