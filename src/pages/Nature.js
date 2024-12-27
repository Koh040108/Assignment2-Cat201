import React from "react";
import { Link } from "react-router-dom";
import natureData from "../pages/natureData";
import "./Nature.css";

const Nature = () => {
    return (
        <div className="nature-list">
            {natureData.map((location) => (
                <div key={location.id} className="nature-item">
                    <h3>{location.title}</h3>
                    <img src={location.image} alt={location.title} />
                    <p>{location.description}</p>
                    <Link to={`/nature/${location.id}`}>Read More</Link> {/* Link to dynamic route */}
                </div>
            ))}
        </div>
    );
};

export default Nature;
