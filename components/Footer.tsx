import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093746!2d144.9537363153157!3d-37.81627927975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5776e99b409eaf!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1611027226770!5m2!1sen!2sus"
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
            <p className="font-tektur text-xs" style={{ fontFamily: 'Tektur' }}>(+44) 239 121 332</p>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-map-marker-alt text-2xl mb-2"></i>
            <p className="font-tektur text-xs" style={{ fontFamily: 'Tektur' }}>PO Box 16122 Collins Street West</p>
            <p className="font-tektur text-xs" style={{ fontFamily: 'Tektur' }}>Victoria 8007 Australia</p>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-envelope text-2xl mb-2"></i>
            <p className="font-tektur text-xs" style={{ fontFamily: 'Tektur' }}>hello@example.com</p>
            <p className="font-tektur text-xs" style={{ fontFamily: 'Tektur' }}>job@example.com</p>
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
