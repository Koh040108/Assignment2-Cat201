import React from "react";

// Sample data for cultural highlights
const cultureData = [
    {
        title: "George Town Heritage",
        description: "Explore the rich history of George Town, a UNESCO World Heritage Site.",
        image: "https://example.com/george-town.jpg",
    },
    {
        title: "Penang Cuisine",
        description: "Discover the unique flavors of Penang, including Char Kway Teow and Laksa.",
        image: "https://example.com/penang-cuisine.jpg",
    },
    {
        title: "Festivals",
        description: "Experience vibrant festivals like Thaipusam, George Town Festival, and more.",
        image: "https://example.com/festivals.jpg",
    },
];

// Card component for individual cultural elements
const CultureCard = ({ title, description, image }) => {
    return (
        <div className="culture-card">
            <img src={image} alt={title} className="culture-image" />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

// Main Culture component
const CultureSection = () => {
    return (
        <section className="culture-section">
            <h2>Discover Penang's Culture</h2>
            <div className="culture-grid">
                {cultureData.map((item, index) => (
                    <CultureCard
                        key={index}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                    />
                ))}
            </div>
        </section>
    );
};

export default CultureSection;

