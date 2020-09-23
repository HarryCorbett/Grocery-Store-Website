import React from 'react';
import './NavBar.css';

function NavBar() {

    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navlinks = document.querySelectorAll('.nav-links li');

        nav.classList.toggle('nav-active');

        navlinks.forEach((link, index) => {
            link.style = 'opacity: 1;'
        })
    }

    return(
        <div>
            <nav>
                <div class="logo"> Lower Common Road Stores </div>
                <ul class="nav-links">
                    <li><a href='#'>Home</a></li>
                    <li><a href='#about' onClick={navSlide}>About</a></li>
                    <li><a href='#hours'>Opening hours</a></li>
                    <li><a href='#location'>Location</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>

                <div class="burger" onClick={navSlide}>
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </div>

            </nav>
        </div>
    );
}

export default NavBar;