import React from 'react';
import Home from './pages/Home'; // Ensure this is the correct Home component path
import Header from './components/Header';
import Footer from './components/Footer';
import TouristSpots from "./pages/TouristSpots";
import Culture from "./pages/Culture";
// Add other imports here as needed

function App() {
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
