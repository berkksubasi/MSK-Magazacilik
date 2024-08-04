'use client';
import { useState, useEffect } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (event: any, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScrollEffect = () => {
      const header = document.querySelector('header');
      if (header) {
        if (window.scrollY > 0) {
          header.classList.add('bg-opacity-90');
        } else {
          header.classList.remove('bg-opacity-90');
        }
      }
    };

    window.addEventListener('scroll', handleScrollEffect);
    return () => window.removeEventListener('scroll', handleScrollEffect);
  }, []);

  useEffect(() => {
    console.log("Menu Open State: ", menuOpen);
  }, [menuOpen]);

  return (
    <header className="bg-black bg-opacity-80 text-white py-4 fixed w-full z-50 transition-opacity duration-300">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold" style={{ fontFamily: 'Tektur' }}>MSK Mağazacılık</div>
        {/* Normal Menü */}
        <nav className="hidden md:flex items-center space-x-6" style={{ fontFamily: 'Tektur' }}>
          <a href="#home" className="hover:text-gray-400" onClick={(e) => handleScroll(e, 'home')}>Anasayfa</a>
          <a href="#about" className="hover:text-gray-400" onClick={(e) => handleScroll(e, 'about')}>Kurumsal</a>
          <a href="#collection" className="hover:text-gray-400" onClick={(e) => handleScroll(e, 'collection')}>Koleksiyon</a>
          <a href="#contact" className="hover:text-gray-400" onClick={(e) => handleScroll(e, 'contact')}>İletişim</a>
        </nav>
        {/* Hamburger Menü Butonu */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Hamburger Menü */}
      {menuOpen && (
        <nav className="md:hidden bg-black bg-opacity-80 text-white py-4">
          <a href="#home" className="block px-4 py-2 hover:bg-gray-800" onClick={(e) => handleScroll(e, 'home')}>Anasayfa</a>
          <a href="#about" className="block px-4 py-2 hover:bg-gray-800" onClick={(e) => handleScroll(e, 'about')}>Kurumsal</a>
          <a href="#collection" className="block px-4 py-2 hover:bg-gray-800" onClick={(e) => handleScroll(e, 'collection')}>Koleksiyon</a>
          <a href="#contact" className="block px-4 py-2 hover:bg-gray-800" onClick={(e) => handleScroll(e, 'contact')}>İletişim</a>
        </nav>
      )}
    </header>
  );
}
