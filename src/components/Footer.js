import React from "react";
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
                            <li><a href="/about-us" className="text-white text-decoration-none">About Us</a></li>
                            <li><a href="/contact-us" className="text-white text-decoration-none">Contact</a></li>
                            <li><a href="/privacy-policy" className="text-white text-decoration-none">Privacy Policy</a></li>
                            <li><a href="/terms-of-service" className="text-white text-decoration-none">Terms of Service</a></li>
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div className="col-md-4">
                        <h5>Follow Us</h5>
                        <div>
                            <a href="https://facebook.com" className="text-white me-3">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="https://instagram.com" className="text-white me-3">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="https://twitter.com" className="text-white me-3">
                                <i className="bi bi-twitter"></i>
                            </a>
                            <a href="https://youtube.com" className="text-white">
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
