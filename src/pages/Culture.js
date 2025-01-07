import React from 'react';
import { Link } from 'react-router-dom';
import './Culture.css'; // Importing the CSS file for this component
import cultureData from '../pages/CultureData'; // Import the culture data

const Culture = () => {
    // Check if cultureData is an array before mapping over it
    if (!Array.isArray(cultureData)) {
        return <p>Failed to load culture data.</p>;
    }

    return (
        <section id="culture"
                 style={{
                     position: 'relative',
                     backgroundImage: `url('backdrop nature.jpg')`,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center',
                     backgroundRepeat: 'no-repeat',
                     color: '#fff',
                     textAlign: 'center',
                     padding: '2rem 0',
                 }}>
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
            <div style={{position: 'relative', zIndex: 2}}>
                <h2>Cultural Heritage of Penang</h2>
                <div className="culture-gallery">
                    {cultureData.map((culture) => (
                        <div className="culture-item" key={culture.id}>
                            <img src={culture.image} alt={culture.title}/>
                            <h3>{culture.title}</h3>
                            <p>{culture.description}</p>
                            <Link to={`/culture/${culture.id}`} className="btn">
                                Learn More
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
);
};

export default Culture;

