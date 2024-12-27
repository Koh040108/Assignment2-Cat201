import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Nature from './pages/Nature';
import NatureDetail from './pages/NatureDetail';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <div>
                {/* Header component */}
                <Header />

                {/* Navigation bar for easy navigation */}
                <nav style={{ backgroundColor: '#FFC107', padding: '10px' }}>
                    <a href="/" style={{ margin: '0 15px', textDecoration: 'none', color: '#000' }}>Home</a>
                    <a href="/nature" style={{ margin: '0 15px', textDecoration: 'none', color: '#000' }}>Nature and Adventure</a>
                </nav>

                {/* Main content area */}
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} /> {/* Route for Home */}
                        <Route path="/nature" element={<Nature />} /> {/* Route for Nature and Adventure */}
                        <Route path="/nature/:locationId" element={<NatureDetail />} /> {/* Dynamic route for details */}
                    </Routes>
                </main>

                {/* Footer component */}
                <Footer />
            </div>
        </Router>
    );
}

export default App;
