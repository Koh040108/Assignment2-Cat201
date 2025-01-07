import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Card from '../components/Card'; // Import the Card component
import './Home.css'; // Import custom styles for Home component


const Home = () => {
    return (
        <div
            className="home-container"
            style={{ backgroundColor: "#FBF6D9" }}
        >
            <div className="content">
                {/* Full-Screen Carousel */}
                <div
                    id="carouselExampleCaptions"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                        {/* Indicators */}
                        <div className="carousel-indicators">
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to="0"
                                className="active"
                                aria-current="true"
                                aria-label="Slide 1"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to="1"
                                aria-label="Slide 2"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to="2"
                                aria-label="Slide 3"
                            ></button>
                        </div>

                        {/* Carousel Items */}
                        <div className="carousel-item active">
                            <img
                                src="./corousel1.png"
                                className="d-block w-100"
                                alt="Penang View"
                                style={{maxHeight: "80vh", objectFit: "cover"}}
                            />
                            <div className="carousel-caption d-md-block">
                                <h5>Discover the Beauty of Penang</h5>
                                <p>
                                    From stunning beaches to rich culture, Penang has it all.
                                </p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img
                                src="./corousel2.png"
                                className="d-block w-100"
                                alt="Penang Food"
                                style={{maxHeight: "80vh", objectFit: "cover"}}
                            />
                            <div className="carousel-caption d-md-block">
                                <h5>Penang Street Food</h5>
                                <p>
                                    Indulge in the famous street food culture of Penang.
                                </p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img
                                src="./corousel3.png"
                                className="d-block w-100"
                                alt="Penang Hill"
                                style={{maxHeight: "80vh", objectFit: "cover"}}
                            />
                            <div className="carousel-caption d-md-block">
                                <h5>Explore Penang Hill</h5>
                                <p>
                                    Take in the breathtaking views from Penang Hill.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Controls */}
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                {/* Welcome Section */}
                <header className="text-center my-5 px-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="welcome-text"> Welcome To Peneng</h1>
                            </div>
                        </div>
                    </div>
                    <p className="lead text-muted cursor typewriter-animation"
                       style={{fontFamily: 'Poppins, sans-serif'}}>Explore the best places and experiences in
                        Penang!</p>
                </header>

                {/* Culture and Heritage Section */}
                <header className="text-center">
                    <h2 className="display-6"
                        style={{fontFamily: 'Poppins, sans-serif', color: "#F660AB", fontWeight: 'bold'}}>Culture and
                        Heritage</h2>
                </header>
                <div className="container">
                    <div className="row g-4">
                        {/* Card 1 */}
                        <Card
                            imageSrc="/temple.jpg"
                            title="Penang Temple"
                            text="A beautiful and historic temple that reflects Penang's rich heritage."
                            link="/culture/1"
                            buttonColor="#F660AB"
                        />

                        {/* Card 2 */}
                        <Card
                            imageSrc="/streetart.jpeg"
                            title="Penang Street Art"
                            text="Famous for its vibrant street art that blends tradition and modernity, telling stories of Penang's culture."
                            link="/culture/2"
                            buttonColor="#F660AB"
                        />

                        {/* Card 3 */}
                        <Card
                            imageSrc="/gtw.jpg"
                            title="George Town"
                            text="A UNESCO World Heritage Site known for its cultural diversity, colonial architecture, and rich history."
                            link="/culture/3"
                            buttonColor="#F660AB"
                        />
                    </div>
                </div>

                {/* Nature and Adventure Section */}
                <header className="text-center my-5">
                    <h2 className="display-6" style={{fontFamily: 'Poppins, sans-serif', color: "#00B5B5",fontWeight: 'bold'}}>Nature and
                        Adventure</h2>
                </header>
                <div className="container">
                    <div className="row g-4">
                        {/* Card 1 */}
                        <Card
                            imageSrc="./penang-hill.jpg"
                            title="Penang Hill"
                            text="Experience the breathtaking views and serene environment at Penang Hill."
                            link="/nature/penang-hill"
                            buttonColor="#00B5B5"
                        />

                        {/* Card 2 */}
                        <Card
                            imageSrc="./escape-waterpark.jpg"
                            title="Escape Waterpark"
                            text="A thrilling adventure park with water slides and outdoor fun for all ages."
                            link="/nature/escape"
                            buttonColor="#00B5B5"
                        />

                        {/* Card 3 */}
                        <Card
                            imageSrc="./entopia.jpg"
                            title="Entopia"
                            text="Discover the wonders of nature with hundreds of butterflies and interactive exhibits."
                            link="/nature/entopia"
                            buttonColor="#00B5B5"
                        />
                    </div>
                </div>
                {/* Food and Lifestyle */}
                <header className="text-center my-5">
                    <h2 className="display-6" style={{fontFamily: 'Poppins, sans-serif', color: "#ff6f00",fontWeight: 'bold'}}>Food and
                        Lifestyle</h2>
                </header>
                <div className="container">
                    <div className="row g-4">
                        {/* Card 1 */}
                        <Card
                            imageSrc="./charktw.jpeg"
                            title="Char Koay Teow"
                            text="A must-try dish with stir-fried flat rice noodles and prawns"
                            link="/food/char-koay-teow"
                            buttonColor="#ff6f00"
                        />

                        {/* Card 2 */}
                        <Card
                            imageSrc="./laksa.jpeg"
                            title="Peneng Asam Laksa"
                            text="A tangy and spicy noodle soup famous in Penang."
                            link="/food/penang-laksa"
                            buttonColor="#ff6f00"
                        />

                        {/* Card 3 */}
                        <Card
                            imageSrc="./nasi kandar.jpg"
                            title="Nasi Kandar"
                            text="Hot & spicy curry rice, signature of Penang first cuisine."
                            link="/food-nasi-kandar"
                            buttonColor="#ff6f00"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
