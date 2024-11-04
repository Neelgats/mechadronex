import React from 'react';
import './Header.css';
import logo from './MechaDroneX-logo.png';
const Header = ()=>{
    return(
        <header className='header'>
            <div className='logo'>
                <img src={logo} alt='club logo'></img>
                <h1>MechaDroneX</h1>
            </div>
            <nav>
                <ul>
                    <li><a href='#about'>About Us</a></li>
                    <li><a href='#members'>Members</a></li>
                    <li><a href='#news'>News</a></li>
                    <li><a href='#contact'>Contact Us</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
