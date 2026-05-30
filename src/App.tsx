import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { NewsGrid } from './components/NewsGrid';
import { BannerAd } from './components/BannerAd';
import { Footer } from './components/Footer';
import { Article } from './components/Article';

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(window.location.hash || '#home');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen font-inter bg-white text-neutral-900 flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {currentPage === '#article' ? (
          <Article />
        ) : (
          <>
            <a href="#article" className="block hover:opacity-90 transition-opacity">
              <Hero />
            </a>
            <BannerAd />
            <a href="#article" className="block hover:opacity-90 transition-opacity">
              <NewsGrid />
            </a>
            <BannerAd />
            <a href="#article" className="block hover:opacity-90 transition-opacity">
              <NewsGrid />
            </a>
          </>
        )}
      </main>
      
      <Footer />
    </div>
  );
}

