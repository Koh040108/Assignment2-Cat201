import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Include Bootstrap JS for functionality

const Home = () => {
    return (
        <div className="container">
            {/* Carousel Section */}
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {/* Carousel Indicators */}
                    <ol className="carousel-indicators">
                        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></li>
                        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
                        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
                    </ol>

                    {/* First Carousel Item */}
                    <div className="carousel-item active">
                        <img src="corousel1.png" className="d-block w-100" alt="Penang View"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Discover the Beauty of Penang</h5>
                            <p>From stunning beaches to rich culture, Penang has it all.</p>
                        </div>
                    </div>

                    {/* Second Carousel Item */}
                    <div className="carousel-item">
                        <img src="corousel2.png" className="d-block w-100" alt="Penang Food"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Penang Street Food</h5>
                            <p>Indulge in the famous street food culture of Penang.</p>
                        </div>
                    </div>

                    {/* Third Carousel Item */}
                    <div className="carousel-item">
                        <img src="corousel3.png" className="d-block w-100" alt="Penang Hill"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Explore Penang Hill</h5>
                            <p>Take in the breathtaking views from Penang Hill.</p>
                        </div>
                    </div>
                </div>

                {/* Carousel Controls */}
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Header Section */}
            <header className="text-center my-5">
                <h1>Welcome to Visit Penang</h1>
                <p className="lead">Explore the best places and experiences in Penang!</p>
            </header>

            {/* Attractions Cards */}
            <div className="row">
                {/* Card 1 */}
                <div className="col-md-4">
                    <div className="card">
                        <img src="image2.png" className="card-img-top" alt="Penang Landmark" />
                        <div className="card-body">
                            <h5 className="card-title">Penang Hill</h5>
                            <p className="card-text">Enjoy panoramic views of the island from Penang Hill.</p>
                            <a href="#" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="col-md-4">
                    <div className="card">
                        <img src="image1.png" className="card-img-top" alt="Penang Street Food" />
                        <div className="card-body">
                            <h5 className="card-title">Street Food Tour</h5>
                            <p className="card-text">Savor the famous street food of Penang in this guided tour.</p>
                            <a href="#" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="col-md-4">
                    <div className="card">
                        <img src="image3.png" className="card-img-top" alt="Penang Beach" />
                        <div className="card-body">
                            <h5 className="card-title">Penang Beaches</h5>
                            <p className="card-text">Relax and unwind on the beautiful beaches of Penang.</p>
                            <a href="#" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
