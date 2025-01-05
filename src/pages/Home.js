import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Card from '../components/Card'; // Import the Card component
import './Home.css'; // Import custom styles for Home component


const Home = () => {
    return (
        <div className="home-container"
             style={{backgroundColor: "#FBF6D9"}}>
            <div className="content">
                {/* Full-Screen Carousel */}
                <div id="carouselExampleCaptions" className="carousel slide vh-100" data-bs-ride="carousel">
                    <div className="carousel-inner h-100">
                        {/* Indicators */}
                        <ol className="carousel-indicators">
                            <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></li>
                            <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
                            <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
                        </ol>

                        {/* Carousel Items */}
                        <div className="carousel-item active h-100">
                            <img
                                src='./corousel1.png'
                                className="d-block w-100 h-100 object-fit-cover"
                                alt="Penang View"
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className="text-white text-lg">Discover the Beauty of Penang</h5>
                                <p className="text-light">From stunning beaches to rich culture, Penang has it all.</p>
                            </div>
                        </div>
                        <div className="carousel-item h-100">
                            <img
                                src='./corousel2.png'
                                className="d-block w-100 h-100 object-fit-cover"
                                alt="Penang Food"
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className="text-white text-lg">Penang Street Food</h5>
                                <p className="text-light">Indulge in the famous street food culture of Penang.</p>
                            </div>
                        </div>
                        <div className="carousel-item h-100">
                            <img
                                src='./corousel3.png'
                                className="d-block w-100 h-100 object-fit-cover"
                                alt="Penang Hill"
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className="text-white text-lg">Explore Penang Hill</h5>
                                <p className="text-light">Take in the breathtaking views from Penang Hill.</p>
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
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                {/* Welcome Section */}
                <header className="text-center my-5 px-3">
                    <h1 className="display-4" style={{fontFamily: 'Poppins, sans-serif', color: "blue"}}>Welcome to
                        Visit
                        Penang</h1>
                    <p className="lead text-muted" style={{fontFamily: 'Poppins, sans-serif'}}>Explore the best places
                        and
                        experiences in Penang!</p>
                </header>

                {/* Culture and Heritage Section */}
                <header className="text-center">
                    <h2 className="display-6" style={{fontFamily: 'Poppins, sans-serif', color: "#F660AB"}}>Culture and
                        Heritage</h2>
                </header>
                <div className="container">
                    <div className="row g-4">
                        {/* Card 1 */}
                        <Card
                            imageSrc=""
                            title="Penang Temple"
                            text="A beautiful and historic temple that reflects Penang's rich heritage."
                            link="/food"
                            buttonColor="#F660AB"
                        />

                        {/* Card 2 */}
                        <Card
                            imageSrc=""
                            title="Penang Hill"
                            text="Enjoy panoramic views of the island from Penang Hill."
                            link="/nature/penang-hill"
                            buttonColor="#F660AB"
                        />

                        {/* Card 3 */}
                        <Card
                            imageSrc=""
                            title="Penang Beaches"
                            text="Relax and unwind on the beautiful beaches of Penang."
                            link="/nature/beaches"
                            buttonColor="#F660AB"
                        />
                    </div>
                </div>

                {/* Nature and Adventure Section */}
                <header className="text-center my-5">
                    <h2 className="display-6" style={{fontFamily: 'Poppins, sans-serif', color: "#00B5B5"}}>Nature and
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
                    <h2 className="display-6" style={{fontFamily: 'Poppins, sans-serif', color: "#ff6f00"}}>Food and Lifestyle</h2>
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
