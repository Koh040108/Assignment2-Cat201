import React, { useState } from "react";

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        setCurrentIndex(isFirstSlide ? images.length - 1 : currentIndex - 1);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === images.length - 1;
        setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
    };

    return (
        <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
            {/* Slides */}
            <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                        className="w-full flex-shrink-0"
                    />
                ))}
            </div>

            {/* Navigation */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
            >
                &#8249;
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
            >
                &#8250;
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${
                            index === currentIndex
                                ? "bg-gray-900"
                                : "bg-gray-300 hover:bg-gray-500"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
