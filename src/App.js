import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Ensure this path is correct
import Header from "./components/Header";
import Footer from "./components/Footer";
import Food from "./pages/Food";
import FoodDetail from "./pages/FoodDetail";
import Nature from "./pages/Nature";
import NatureDetail from "./pages/NatureDetail";
import Culture from "./pages/Culture";
import TouristSpots from "./pages/TouristSpots";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";


function App() {
    return (
        <Router>
            <div className="min-h-screen flex flex-col">
                {/* Header */}
                <Header />

                {/* Main Content */}
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/nature" element={<Nature />} />
                        <Route path="/nature/:locationId" element={<NatureDetail />} />
                        <Route path="/food" element={<Food />} />
                        <Route path="/food/:foodId" element={<FoodDetail />} />
                        <Route path="/culture" element={<Culture />} />
                        <Route path="/tourist-spots" element={<TouristSpots />} />
                        <Route path="/AboutUs" element={<AboutUs />} />
                        <Route path="/ContactUs" element={<ContactUs />} />
                        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
                        <Route path="/TermsOfService" element={<TermsOfService />} />
                        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
                    </Routes>
                </main>

                {/* Footer */}
                <Footer />
            </div>
        </Router>
    );
}

export default App;
