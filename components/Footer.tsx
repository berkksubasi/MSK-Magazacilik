import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.7299046400176!2d34.622160776390494!3d36.80102577224696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1527f3993d73a9b9%3A0xd58d6c2fef36411d!2zTVNLIE1hxJ9hemFjxLFsxLFrIE1lcmtleiBPZmlz!5e0!3m2!1str!2str!4v1728473992159!5m2!1str!2str"
            width="100%"
            height="350"
            loading="lazy"
            className="border-0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col items-center">
            <i className="fas fa-phone-alt text-2xl mb-2"></i>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-map-marker-alt text-2xl mb-2"></i>
            <p className="font-tektur text-xs" style={{ fontFamily: 'Tektur' }}>Mahmudiye, Ahmet Hamdi Ongun, Kuvayi Milliye Cd. İşhanı</p>
            <p className="font-tektur text-xs" style={{ fontFamily: 'Tektur' }}>NO:28, 33070</p>
            <p className="font-tektur text-xs" style={{ fontFamily: 'Tektur' }}>Akdeniz/Mersin</p>
            <p className="font-tektur text-xs" style={{ fontFamily: 'Tektur' }}>bilgi@msktekstil.com.tr</p>
          </div>
        </div>
        <div>
          <p className="font-tektur text-xs" style={{ fontFamily: 'Tektur' }}>© 2024 MSK Tekstil. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
