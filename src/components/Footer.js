import React from "react";
import { Link } from "react-router-dom"; // Import Link for internal navigation
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // For social media icons

const Footer = () => {
    return (
        <footer className="footer bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                    {/* About Section */}
                    <div className="col-md-4">
                        <h5>About Visit Penang</h5>
                        <p>
                            Discover the beauty, culture, and adventure Penang has to offer. From stunning beaches to vibrant street food scenes, Penang is the perfect destination for everyone.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/AboutUs" className="text-white text-decoration-none">About Us</Link></li>
                            <li><Link to="/ContactUs" className="text-white text-decoration-none">Contact</Link></li>
                            <li><Link to="/PrivacyPolicy" className="text-white text-decoration-none">Privacy Policy</Link></li>
                            <li><Link to="/TermsOfService" className="text-white text-decoration-none">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div className="col-md-4">
                        <h5>Follow Us</h5>
                        <div>
                            <a href="https://facebook.com" className="text-white me-3" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="https://instagram.com" className="text-white me-3" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="https://twitter.com" className="text-white me-3" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-twitter"></i>
                            </a>
                            <a href="https://youtube.com" className="text-white" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="text-center mt-4">
                    <small>&copy; 2025 Visit Penang. All rights reserved.</small>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
