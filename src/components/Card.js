import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'; // If you're using custom styles
import { Link } from 'react-router-dom'; // Import Link component

const Card = ({ imageSrc, title, text, link, buttonColor }) => {
    return (
        <div className="col-12 col-md-4">
            <div className="card h-100 d-flex flex-column shadow-sm hover-shadow-lg">
                <img
                    src={imageSrc}
                    className="card-img-top img-fluid"
                    alt={title}
                    style={{ objectFit: 'cover', height: '200px' }} // Ensures image fits the card's dimensions
                />
                <div className="card-body flex-grow-1 d-flex flex-column">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    <Link to={link}
                        className="details-link"
                          style={{
                              backgroundColor: buttonColor, // Dynamically apply the button color passed as prop
                              color: '#fff',// Set button text color to white
                              borderRadius: '5px', // Add border-radius here
                          }}
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    );
};

// Prop validation for the component
Card.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    buttonColor: PropTypes.string.isRequired, // Add prop validation for buttonColor
};

export default Card;
