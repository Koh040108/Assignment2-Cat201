import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Header.css';

const Header = () => {
    return (
        <header className="header" style={{ backgroundColor: 'light yellow' }}>
            <div className="container d-flex align-items-center justify-content-between">
                <div className="logo d-flex align-items-center">
                    <img
                        src="logo.png"
                        alt="Visit Penang Logo"
                        style={{ width: '50px', height: '50px', marginRight: '10px' }}
                    />
                    <h1 className="h4 m-0">Visit Penang</h1>
                </div>
                <nav>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Cultural and Heritage</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/nature">Nature and Adventure</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/food">Food and Lifestyle</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
