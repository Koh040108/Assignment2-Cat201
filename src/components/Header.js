import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Header.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap icons

const Header = () => {
    return (
        <header className="header bg-dark shadow-sm">
            <div className="container d-flex align-items-center justify-content-between py-2">
                {/* Logo Section */}
                <div className="logo d-flex align-items-center">
                    <img
                        src="logo.png"
                        alt="Visit Penang Logo"
                        className="me-2"
                        style={{width: '50px', height: '50px'}}
                    />
                    <h1 className="h4 m-0 text-white custom-heading">Visit Penang</h1>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="navbar-toggler d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="bi bi-list" style={{ fontSize: '1.5rem', color: '#ffffff' }}></i>
                </button>

                {/* Desktop Navigation */}
                <nav className="d-none d-lg-block">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <NavLink exact to="/" className="nav-link" activeClassName="active">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/culture" className="nav-link" activeClassName="active">
                                Cultural and Heritage
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/nature" className="nav-link" activeClassName="active">
                                Nature and Adventure
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/food" className="nav-link" activeClassName="active">
                                Food and Lifestyle
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Mobile Menu */}
            <div className="collapse" id="navbarNavDropdown">
                <ul className="nav flex-column bg-light p-3">
                    <li className="nav-item">
                        <NavLink exact to="/" className="nav-link" activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/culture" className="nav-link" activeClassName="active">
                            Cultural and Heritage
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/nature" className="nav-link" activeClassName="active">
                            Nature and Adventure
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/food" className="nav-link" activeClassName="active">
                            Food and Lifestyle
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
