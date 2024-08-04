'use client';
import { useEffect, useState } from 'react';
import Layout from './layout';
import About from '../../components/About';
import Collection from '../../components/Collection';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false; 

const backgrounds = [
  '/backgrounds/background1.png',
  '/backgrounds/background2.png',
  '/backgrounds/background3.png',
  '/backgrounds/background4.png',
  '/backgrounds/background5.png',
  '/backgrounds/background6.png',
];

function preloadImages(urls: any[]) {
  urls.forEach((url: string) => {
    const img = new Image();
    img.src = url;
  });
}

export default function Home() {
  const [currentBackground, setCurrentBackground] = useState(0);

  useEffect(() => {
    preloadImages(backgrounds);

    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <section
        id="home"
        className="relative h-screen bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${backgrounds[currentBackground]})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto h-full flex flex-col justify-center items-center text-center relative z-10 text-white px-4 md:px-0">
          <h1 className="text-3xl md:text-5xl font-bold fade-in" style={{ fontFamily: 'Tektur' }}>KALİTE TESADÜF DEĞİLDİR</h1>
          <p className="mt-4 w-full md:w-2/3 lg:w-1/3 text-xs md:text-sm text-gray-200 fade-in" style={{ fontFamily: 'Tektur' }}>Zarafetin ve kalitenin buluştuğu noktadayız. Her mevsim için özenle seçilmiş tesettür giyim koleksiyonlarımızı keşfedin.</p>
        </div>
      </section>
      <div id="about">
        <About />
      </div>
      <div id="collection">
        <Collection />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </Layout>
  );
}
