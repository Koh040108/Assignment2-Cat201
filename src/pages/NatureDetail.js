import React from "react";
import { useParams } from "react-router-dom";
import natureData from "../pages/natureData";
import "./NatureDetail.css";

const NatureDetail = () => {
    const { locationId } = useParams(); // Get locationId from the route
    const location = natureData.find((loc) => loc.id === locationId); // Find the correct location data

    if (!location) {
        return <p>Location not found. Please select a valid destination.</p>;
    }

    return (
        <div className="nature-detail">
            <h2>{location.title}</h2>
            <img src={location.image} alt={location.title} />
            <div className="description">
                <p>
                    <strong>Location:</strong> {location.location} <br />
                    <strong>Elevation:</strong> {location.elevation || "Not Available"} <br />
                    <strong>Coordinates:</strong> {location.coordinates || "Not Available"} <br />
                    <strong>Established:</strong> {location.established || "Not Available"}
                </p>
                <div dangerouslySetInnerHTML={{ __html: location.description }} />
            </div>
            <div className="full-description">
                <h3>Highlights and Attractions</h3>
                <div dangerouslySetInnerHTML={{ __html: location.fullDescription }} />
            </div>
        </div>
    );
};

export default NatureDetail;
