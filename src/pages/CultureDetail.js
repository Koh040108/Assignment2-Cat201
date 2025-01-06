import React from 'react';
import { useParams } from 'react-router-dom'; // To get the cultureId from the URL
import cultureData from '../pages/CultureData'; // Import the culture data
import './CultureDetail.css'; // Import the CSS file for this component

const CultureDetail = () => {
    const { cultureId } = useParams(); // Get the cultureId from the URL
    const culture = cultureData.find((item) => item.id === cultureId); // Find the culture data

    if (!culture) {
        return <p>Culture not found. Please select a valid destination.</p>;
    }

    return (
        <div className="culture-detail">
            <h2>{culture.title}</h2>
            <img src={culture.image} alt={culture.title} />
            <div className="description">
                <p><strong>Location:</strong> {culture.location}</p>
                <p><strong>Description:</strong> {culture.description}</p>
            </div>
            <div className="full-description">
                <h3>Highlights and Attractions</h3>
                <div dangerouslySetInnerHTML={{ __html: culture.fullDescription }} />
            </div>
        </div>
    );
};

export default CultureDetail;
