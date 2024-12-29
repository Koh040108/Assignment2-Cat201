import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Nature from './pages/Nature';
import NatureDetail from './pages/NatureDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import Food from './pages/Food';
import FoodDetail from "./pages/FoodDetail";

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
}

export default App;
