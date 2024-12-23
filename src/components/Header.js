import React from 'react';
import './Header.css'; // We'll style the header in a separate CSS file

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="logo.png" alt="Visit Penang Logo" />
                <h1>Visit Penang</h1>
            </div>
            <nav className="nav">
                <ul>
                    <li><a href="#tourist-spots">Tourist Spots</a></li>
                    <li><a href="#food">Food & Beverages</a></li>
                    <li><a href="#hotels">Hotels</a></li>
                    <li><a href="#others">Others</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
