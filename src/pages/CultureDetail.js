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
            <div className="blur-background"></div> {/* Added blur background */}

            <h2>{culture.title}</h2>
            <img className="culture-image" src={culture.image} alt={culture.title} />
            <div className="description">
                <p><strong>Location:</strong> {culture.location}</p>
                <p><strong>Description:</strong> {culture.description}</p>
            </div>
            <div className="full-description">
                <h3>Highlights and Attractions</h3>
                <div dangerouslySetInnerHTML={{ __html: culture.fullDescription }} />
            </div>

            {/* Add local video based on culture ID */}
            {culture.id === "1" && (
                <div className="video-container">
                    <h3>Watch the Penang Temple Video</h3>
                    <video width="100%" height="400" controls>
                        <source src="/temple.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}

            {culture.id === "2" && (
                <div className="video-container">
                    <h3>Watch the Penang Street Art Video</h3>
                    <video width="100%" height="400" controls>
                        <source src="/streetart.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}

            {culture.id === "3" && (
                <div className="video-container">
                    <h3>Watch the George Town Video</h3>
                    <video width="100%" height="400" controls>
                        <source src="/gtw.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}

            {/* Add map button */}
            <div className="map-button-container">
                {culture.id === "1" && (
                    <a href="https://www.google.com/maps?q=5.4167,100.3050" target="_blank" rel="noopener noreferrer">
                        <button className="map-button">View Map: Kek Lok Si Temple</button>
                    </a>
                )}

                {culture.id === "2" && (
                    <a href="https://www.google.com/maps?q=5.4169,100.3323" target="_blank" rel="noopener noreferrer">
                        <button className="map-button">View Map: Penang Street Art</button>
                    </a>
                )}

                {culture.id === "3" && (
                    <a href="https://www.google.com/maps?q=5.4167,100.3321" target="_blank" rel="noopener noreferrer">
                        <button className="map-button">View Map: George Town</button>
                    </a>
                )}
            </div>
        </div>
    );
};

export default CultureDetail;
