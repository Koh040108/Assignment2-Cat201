import React from 'react';
import './Culture.css'; // Importing the CSS file for this component

const Culture = () => {
    return (
        <section id="culture">
            <h2>Cultural Heritage of Penang</h2>
            <div className="culture-gallery">
                <div className="culture-item">
                    <img src="/temple.jpg" alt="Penang Temple" />
                    <h3>Penang Temple</h3>
                    <p>A beautiful and historic temple that reflects Penang's rich heritage.</p>
                </div>
                <div className="culture-item">
                    <img src="/streetart.jpeg" alt="Penang Street Art" />
                    <h3>Penang Street Art</h3>
                    <p>Famous for its vibrant street art that blends tradition and modernity.</p>
                </div>
                <div className="culture-item">
                    <img src="/gtw.jpeg" alt="George Town" />
                    <h3>George Town</h3>
                    <p>A UNESCO World Heritage Site known for its cultural diversity and history.</p>
                </div>
            </div>
        </section>
    );
};

export default Culture;
