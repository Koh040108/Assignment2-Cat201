import React from 'react';
import Home from './pages/Home'; // Ensure this is the correct Home component path
import Header from './components/Header';
import Footer from './components/Footer';
import Food from './pages/Food';
import FoodDetail from "./pages/FoodDetail";
import TouristSpots from "./pages/TouristSpots";
import Culture from "./pages/Culture";
// Add other imports here as needed

function App() {
    return (
        <Router>
            <div>
                {/* Header component */}
                <Header />

                {/* Main content area */}
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/nature" element={<Nature />} />
                        <Route path="/nature/:locationId" element={<NatureDetail />} /> {/* Dynamic route */}
                        <Route path="/food" element={<Food />} />
                        <Route path="/food/:foodId" element={<FoodDetail />} />
                    </Routes>

                </main>

                {/* Footer component */}
                <Footer />
            </div>
        </Router>
    );
    return (
        <div>
            <Header />
            <main>
                {/* Main sections of the site */}
                <Home />
                <TouristSpots />
                <Culture />
                {/* Add other components or pages here */}
            </main>
            <Footer />
        </div>
    );
}

export default App;
