import TouristSpots from './pages/TouristSpots';
import Header from './components/Header';
import Footer from './components/Footer';
// Add other imports here

function App() {
  return (
      <div>
        <Header />
        <main>
          <TouristSpots />
          {/* Add other components */}
        </main>
        <Footer />
      </div>
  );
}
export default App;