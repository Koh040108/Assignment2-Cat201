import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutUs.css'; // Optional for custom styles

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <header className="text-center py-5 bg-primary text-white">
                <h1>About Us</h1>
                <p>Learn more about our mission, vision, and team</p>
            </header>

            <section className="container my-5">
                <div className="row">
                    <div className="col-lg-6">
                        <h2>Our Mission</h2>
                        <p>
                            At Visit Penang, our mission is to showcase the best experiences Penang has to offer. We are dedicated to promoting the culture, nature, and food of this beautiful island, creating unforgettable travel experiences for visitors around the world.
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <h2>Our Vision</h2>
                        <p>
                            Our vision is to become the leading platform for travelers seeking to explore Penang's beauty and heritage. We aim to connect people with authentic, local experiences and help them discover the hidden gems of the island.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-light py-5">
                <div className="container text-center">
                    <h2>Meet Our Team</h2>
                    <div className="row">
                        {/* Team Member 1 */}
                        <div className="col-md-4">
                            <div className="card">
                                <img
                                    src="team-member1.jpg"
                                    className="card-img-top"
                                    alt="Team Member 1"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">John Doe</h5>
                                    <p className="card-text">Founder & CEO</p>
                                </div>
                            </div>
                        </div>

                        {/* Team Member 2 */}
                        <div className="col-md-4">
                            <div className="card">
                                <img
                                    src="team-member2.jpg"
                                    className="card-img-top"
                                    alt="Team Member 2"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Jane Smith</h5>
                                    <p className="card-text">Marketing Director</p>
                                </div>
                            </div>
                        </div>

                        {/* Team Member 3 */}
                        <div className="col-md-4">
                            <div className="card">
                                <img
                                    src="team-member3.jpg"
                                    className="card-img-top"
                                    alt="Team Member 3"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Alex Lee</h5>
                                    <p className="card-text">Content Manager</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
