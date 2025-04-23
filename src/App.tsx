import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Coaching from './pages/Coaching';
import Gallery from './pages/Gallery';
import Schedule from './pages/Schedule';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/coaching" element={<Coaching />} />
            <Route path="/coaching/coaches" element={<Coaching />} />
            <Route path="/coaching/roadmap" element={<Coaching />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;