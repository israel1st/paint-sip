import React, { useState } from 'react';
import icon1 from './img/icon1.png';
import icon2 from './img/icon2.png';
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <nav className="navbar">
                <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="hamburger"></div>
                </div>

                <ul className={`menu ${menuOpen ? 'open' : ''}`}>
                    <li><a href="#" style={{ color: '#F52485' }}>HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">SERVICES</a></li>
                    <li><a href="#">GALLERY</a></li>
                    <li><a href="#">CONTACT</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li className="get-quote"><a href="#">GET A QUOTE</a></li>               
                </ul>
            </nav>
            <img src={icon1} alt="Icon 1" className="small-image" />
            <img src={icon2} alt="Icon 1" className="small-image2" />
        </div>
    );
};

export default Navbar;

