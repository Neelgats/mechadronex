import React from 'react';
import './Header.css';
import logo from './trace.png';

const Header = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <img src={logo} alt='club logo' />
                <h1>MechaDroneX</h1>
            </div>
            <nav>
                <ul className='nav-links'>
                    <li><a href='#about'>About Us</a></li>
                    <li><a href='#members'>Members</a></li>
                    <li><a href='#news'>News</a></li>
                    <li><a href='#contact'>Contact Us</a></li>
                </ul>
            </nav>

                <ul className='social-links'>
                    <li>
                        <a href="https://www.instagram.com/team_mechadronex/profilecard/?igsh=MWF1c2Y3bGxxdG0ydA==" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37a4 4 0 1 1-4.63-4.63 4 4 0 0 1 4.63 4.63z"></path>
                                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://x.com/teamMechadronex/status/1853696516260835378" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.34.88a9 9 0 0 1-2.83 1.08 4.48 4.48 0 0 0-7.86 3.07c0 .35.04.69.11 1A12.94 12.94 0 0 1 1.64 3.16 4.48 4.48 0 0 0 3.1 9.72a4.5 4.5 0 0 1-2-.55v.06a4.48 4.48 0 0 0 3.56 4.4 4.5 4.5 0 0 1-2 .08 4.48 4.48 0 0 0 4.19 3.12A9 9 0 0 1 0 19.54a12.66 12.66 0 0 0 6.86 2"></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/team-mechadronex-0b288b335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>
                    </li>
                </ul>

        </header>
    );
}

export default Header;
