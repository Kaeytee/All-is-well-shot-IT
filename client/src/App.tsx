import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';import Navbar from './Components/Navbar/Navbar.tsx';  
import Footer from './Components/Footer/Footer.tsx';
import Home from './Pages/Home.tsx';
import About from './Pages/About.tsx';
import RateCard from './Pages/RateCard.tsx';
import Team from './Pages/Team.tsx';
import Contact from './Pages/Contact.tsx';
import NotFound from './Pages/NotFound.tsx';
import BookUs from './Pages/BookUs.tsx';
import Portfolio from './Pages/Porfolio.tsx';

const App = () => {
  return (
    <Router>
      <div className="w-4/5 mx-auto py-4">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/RateCard" element={<RateCard />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/book-us" element={<BookUs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          {/* A 404 page  */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;