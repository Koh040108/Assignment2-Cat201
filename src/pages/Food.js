import React from "react";
import { Link } from "react-router-dom";
import foodData from "./FoodData"; // Import food data
import "./Food.css"; // Import styles

const Food = () => {
    return (
        <section id="food">
            <h2>Food & Beverages in Penang</h2>
            <div className="food-gallery">
                {foodData.map((food) => (
                    <div key={food.id} className="food-item">
                        <img src={food.image} alt={food.title} />
                        <h3>{food.title}</h3>
                        <p>{food.description}</p>
                        <Link to={`/food/${food.id}`} className="details-link">Learn More</Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Food;
