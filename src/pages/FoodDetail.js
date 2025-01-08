import React from "react";
import { useParams } from "react-router-dom";
import foodData from "./FoodData"; // Import food data
import "./FoodDetail.css"; // Import styles for food detail page

const FoodDetail = () => {
    const { foodId } = useParams(); // Get foodId from the URL
    const food = foodData.find((item) => item.id === foodId); // Find the corresponding food item

    if (!food) {
        return <p>Food item not found. Please select a valid dish.</p>;
    }

    return (
        <div className="food-detail">
            <h2>{food.title}</h2>
            <div className="media-container">
                {/* Example video (conditionally rendered if video URL exists) */}
                {food.additionalVideo && (
                    <video className="additional-media" autoPlay muted loop>
                        <source src={food.additionalVideo} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>
            <div className="description">
                <p>
                    <strong>{food.description}</strong>
                </p>
            </div>
            <img src={food.image} alt={food.title}/>
            <div className="full-description">
                <h3>Details</h3>
                <div dangerouslySetInnerHTML={{__html: food.fullDescription}}/>
            </div>
            {/* Button for direct link to Google Maps */}
            <div className="button-container">
                <a href={food.googleMapsLink} className="food-button">View on Google Maps</a>
                <a href={food.siteLink} className="food-button">View Official Website</a>
            </div>
        </div>
    );
};

export default FoodDetail;
