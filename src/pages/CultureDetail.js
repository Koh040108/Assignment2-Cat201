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
            <div className="media-container">
                {/* Example video (conditionally rendered if video URL exists) */}
                {culture.additionalVideo && (
                    <video className="additional-media" autoPlay muted loop>
                        <source src={culture.additionalVideo} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>
            <div className="description">
                <p>
                    <strong>{culture.description}</strong>
                </p>
            </div>
            <img src={culture.image} alt={culture.title}/>
            <div className="full-description">
                <h3>Details</h3>
                <div dangerouslySetInnerHTML={{__html: culture.fullDescription}}/>
            </div>
            {/* Button for direct link to Google Maps */}
            <div className="button-container">
                <a href={culture.googleMapsLink} className="culture-button">View on Google Maps</a>
                <a href={culture.siteLink} className="culture-button">View Official Website</a>
            </div>
        </div>
    );
};

export default CultureDetail;
