import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';import Navbar from './Components/Navbar/Navbar.tsx';  
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
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  return (
    <Router>
      <div className="flex min-h-screen w-full flex-col">
        <div className="navbar-wrapper">
          <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
        
        <main className="flex-1 relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/book-us" element={<BookUs />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/ratecard" element={<RateCard />} />
            <Route path="/team" element={<Team />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;