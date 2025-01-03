import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactUs.css'; // Optional for custom styles

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for contacting us!");
        // Here you can handle form submission like sending the form data to an API
    };

    return (
        <div className="contact-us-container">
            <header className="text-center py-5 bg-primary text-white">
                <h1>Contact Us</h1>
                <p>We would love to hear from you! Please reach out to us with any inquiries.</p>
            </header>

            <section className="container my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Get in Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Your Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Your Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Your Message</label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows="4"
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>

                    <div className="col-md-6">
                        <h2>Our Location</h2>
                        <p>Visit us at the following address:</p>
                        <p>
                            123 Visit Penang St., Penang, Malaysia<br />
                            <strong>Phone:</strong> +60 123-456-789<br />
                            <strong>Email:</strong> contact@visitpenang.com
                        </p>

                        <div id="map" style={{width: '100%', height: '300px'}}>
                            {/* You can embed a Google Map or similar service here */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.4011752477013!2d100.3025455!3d5.3555943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac1a836ae7e53%3A0x835ac54fe8f4d95a!2sUniversiti%20Sains%20Malaysia!5e0!3m2!1sen!2smy!4v1735911179905!5m2!1sen!2smy"
                                width="100%" height="300" style={{border: 0}} allowFullScreen=""
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
