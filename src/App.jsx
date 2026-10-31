import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useLenis } from './hooks/useLenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';

// Helper component to scroll to top on page navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return null;
}

export default function App() {
  // Initialize Lenis smooth scroll and GSAP ScrollTrigger sync
  useLenis();

  const [isPreloaded, setIsPreloaded] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#171918] text-[#F3F0E9] selection:bg-[#A68A64] selection:text-[#171918]">
        {/* Luxury Cinematic Preloader (shows on initial visit) */}
        {!isPreloaded && (
          <Preloader onComplete={() => setIsPreloaded(true)} />
        )}

        {/* Persistent Editorial Navbar */}
        <Navbar />

        {/* Page Routes */}
        <Routes>
          {/* Main Storytelling Home Page */}
          <Route path="/" element={<HomePage isPreloaded={isPreloaded} />} />

          {/* Dedicated Full Products Page */}
          <Route path="/products" element={<ProductsPage />} />

          {/* Fallback */}
          <Route path="*" element={<HomePage isPreloaded={isPreloaded} />} />
        </Routes>

        {/* Persistent Editorial Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
