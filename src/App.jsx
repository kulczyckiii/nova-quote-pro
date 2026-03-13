import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import QuoteGenerator from './pages/QuoteGenerator';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quote" element={<QuoteGenerator />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;