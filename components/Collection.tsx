import React, { useState } from 'react';
import Image from 'next/image';

const brands = Array.from({ length: 14 }, (_, i) => `brand${i + 1}.png`);

const Collection = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleBrands = showAll ? brands : brands.slice(0, 6);

  return (
    <section id="collection" className="bg-white py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center fade-in">
          <h1 className="text-3xl md:text-5xl font-semibold mb-4" style={{ fontFamily: 'Tektur' }}>KOLEKSİYONUMUZ</h1>
          <p className="mt-4 text-xs md:text-sm w-full md:w-3/5 mx-auto font-regular text-gray-500 " style={{ fontFamily: 'Tektur' }}>
            MSK Tekstil olarak, kalite ve yenilikçiliğin mükemmel birleşimini sunuyoruz. Misyonumuz, her müşterimize eşsiz bir alışveriş deneyimi yaşatmak ve gardıroplarını şıklık ve konforla donatmaktır. Özenle seçilmiş kumaşlarımız ve ustalıkla tasarlanmış koleksiyonlarımız, her zevke hitap eden geniş bir ürün yelpazesi sunar. Modadaki son trendleri yakından takip ederek, her sezon yepyeni ve şık parçalarla karşınızdayız.
          </p>
        </div>
        <div className="flex flex-wrap justify-center mt-8 w-full">
          {visibleBrands.map((brand, index) => (
            <div key={index} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-1">
              <div className="bg-gray-50 p-4 shadow-lg rounded-lg transform transition duration-300 hover:scale-105">
                <Image
                  src={`/brands/${brand}`}
                  alt={`Brand ${index + 1}`}
                  width={200}
                  height={200}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
        {!showAll && (
          <button
            className="mt-8 py-2 px-6 border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition duration-300"
            style={{ fontFamily: 'Tektur' }}
            onClick={() => setShowAll(true)}
          >
            Daha Fazla Yükle
          </button>
        )}
      </div>
    </section>
  );
};

export default Collection;
