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
        <section id="culture">
            <h2>Cultural Heritage of Penang</h2>
            <div className="culture-gallery">
                {cultureData.map((culture) => (
                    <div className="culture-item" key={culture.id}>
                        <img src={culture.image} alt={culture.title} />
                        <h3>{culture.title}</h3>
                        <p>{culture.description}</p>
                        <Link to={`/culture/${culture.id}`} className="btn">
                            Learn More
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Culture;

