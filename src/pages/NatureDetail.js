import React from 'react';
import { useParams } from 'react-router-dom'; // Hook for accessing route parameters
import './NatureDetail.css'; // Optional styling for this component

// Define the details for each location
const locationDetails = {
    "penang-hill": {
        title: "Penang Hill",
        description: "Penang Hill offers breathtaking views, lush greenery, and a serene escape from the bustling city. It’s a perfect spot for nature lovers and adventurers.",
        image: "/penang-hill.jpg"
    },
    "escape-waterpark": {
        title: "Escape Waterpark",
        description: "Escape Waterpark is a fun-filled adventure park featuring thrilling water slides, obstacle courses, and outdoor activities for all ages.",
        image: "/escape-waterpark.jpg"
    },
    "entopia": {
        title: "Entopia",
        description: "Entopia is a haven for nature enthusiasts, offering interactive exhibits and a lush sanctuary home to hundreds of butterflies and other insects.",
        image: "/entopia.jpg"
    }
};

const NatureDetail = () => {
    const { locationId } = useParams(); // Access the dynamic route parameter
    const location = locationDetails[locationId]; // Get the details for the selected location

    if (!location) {
        return <p>Location not found. Please go back and try again.</p>;
    }

    return (
        <div className="nature-detail">
            <h2>{location.title}</h2>
            <img src={location.image} alt={location.title} />
            <p>{location.description}</p>
        </div>
    );
};

export default NatureDetail;
