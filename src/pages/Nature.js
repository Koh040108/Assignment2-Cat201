import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Nature.css'; // Importing the CSS file for this component


const Nature = () => {
    return (
        <section
            id="nature"
            style={{
                position: 'relative',
                backgroundImage: `url('backdrop nature.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                color: '#fff',
                textAlign: 'center',
                padding: '2rem 0',
            }}
        >
            {/* Overlay for Blurred Background */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
                    zIndex: 1,
                    filter: 'blur(8px)',
                }}
            ></div>

            <div style={{ position: 'relative', zIndex: 2 }}>
                <h2>Nature and Adventure in Penang</h2>
                <div className="nature-gallery">
                    <div className="nature-item">
                        <img src='penang-hill.jpg' alt="Penang Hill" />
                        <h3>Penang Hill</h3>
                        <p>Experience the breathtaking views and serene environment at Penang Hill.</p>
                        <Link to="/nature/penang-hill" className="details-link">Learn More</Link>
                    </div>
                    <div className="nature-item">
                        <img src='escape-waterpark.jpg' alt="Escape Waterpark" />
                        <h3>Escape Waterpark</h3>
                        <p>A thrilling adventure park with water slides and outdoor fun for all ages.</p>
                        <Link to="/nature/escape" className="details-link">Learn More</Link>
                    </div>
                    <div className="nature-item">
                        <img src='entopia.jpg' alt="Entopia" />
                        <h3>Entopia</h3>
                        <p>Discover the wonders of nature with hundreds of butterflies and interactive exhibits.</p>
                        <Link to="/nature/entopia" className="details-link">Learn More</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Nature;
