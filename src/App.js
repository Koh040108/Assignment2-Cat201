import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
// Add other imports here

function App() {
  return (
      <div>
        <Header />
        <main>
          <Home />
          {/* Add other components */}
        </main>
        <Footer />
      </div>
  );
}
export default App;