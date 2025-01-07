import React from "react";
import { Link } from "react-router-dom";
import foodData from "./FoodData"; // Import food data
import "./Food.css"; // Import styles


const Food = () => {
    return (
        <section
            id="nature"
            style={{
                position: 'relative',
                backgroundImage: `url('food backdrop.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                textAlign: 'center',
                padding: '2rem 0',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
                    zIndex: 1,
                    filter: 'blur(8px)',
                }}
            ></div>
            <div style={{position: 'relative', zIndex: 2}}>
                <h2>Food & Beverages in Penang</h2>
                <div className="food-gallery">
                    {foodData.map((food) => (
                        <div key={food.id} className="food-item">
                            <img src={food.image} alt={food.title}/>
                            <h3>{food.title}</h3>
                            <p>{food.description}</p>
                            <Link to={`/food/${food.id}`} className="details-link">Learn More</Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Food;
