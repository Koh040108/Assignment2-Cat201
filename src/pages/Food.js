import React from "react";
import { Link } from "react-router-dom";
import "./Food.css"; // Import styles


const Food = () => {
    return (
        <section
            id="food"
            style={{
                position: 'relative',
                backgroundImage: `url('food backdrop.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                color: '#ffff',
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
                <h2>Food & Beverages in Penang stlye</h2>
                <div className="food-gallery">
                    <div className="food-item">
                        <img src='charktw.jpeg' alt="Char Koay Teow"/>
                        <h3>Char Koay Teow</h3>
                        <p>A must-try dish with stir-fried flat rice noodles and prawns.</p>
                        <Link to="/food/char-koay-teow" className="details-link">Learn More</Link>
                    </div>
                    <div className="food-item">
                        <img src='laksa.jpeg' alt="Penang Asam Laksa"/>
                        <h3>Penang Asam Laksa</h3>
                        <p>A tangy and spicy noodle soup famous in Penang.</p>
                        <Link to="/food/penang-laksa" className="details-link">Learn More</Link>
                    </div>
                    <div className="food-item">
                        <img src='nasi kandar.jpg' alt="Nasi Kandar"/>
                        <h3>Nasi Kandar</h3>
                        <p>Hot & spicy curry rice, signature of Penang first cuisine.</p>
                        <Link to="/food/nasi-kandar" className="details-link">Learn More</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Food;
