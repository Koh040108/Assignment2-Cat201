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
            <img src={food.image} alt={food.title} />
            <div className="description">
                <p>{food.description}</p>
            </div>
            <div className="full-description">
                <h3>Details</h3>
                <div dangerouslySetInnerHTML={{ __html: food.fullDescription }} />
            </div>
        </div>
    );
};

export default FoodDetail;
