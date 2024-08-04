import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="relative bg-cover bg-center py-20" style={{ backgroundImage: 'url(/backgrounds//contactform.jpeg)' }}>
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="text-white mb-12">
          <p className="text-lg md:text-xl mb-2 fade-in text-gray-300" style={{ fontFamily: 'Tektur' }}>Sizi tanımaktan mutluluk duyarız</p>
          <h1 className="text-3xl md:text-4xl font-semibold mb-8" style={{ fontFamily: 'Tektur' }}>BİZİMLE TEMASA GEÇİN</h1>
        </div>
        <form className="w-full max-w-2xl md:max-w-4xl mx-auto">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <input className="appearance-none block w-full bg-transparent border-b border-white text-white py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" type="text" placeholder="İsim *" style={{ fontFamily: 'Tektur' }} />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <input className="appearance-none block w-full bg-transparent border-b border-white text-white py-3 px-4 leading-tight focus:outline-none focus:border-gray-500" type="email" placeholder="E-posta *" style={{ fontFamily: 'Tektur' }} />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <input className="appearance-none block w-full bg-transparent border-b border-white text-white py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" type="text" placeholder="Konu" style={{ fontFamily: 'Tektur' }} />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <textarea className="appearance-none block w-full bg-transparent border-b border-white text-white py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500 h-32 md:h-48 resize-none" placeholder="İleti *" style={{ fontFamily: 'Tektur' }}></textarea>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-transparent border border-white text-white py-2 px-6 hover:bg-white hover:text-black transition duration-300" type="submit" style={{ fontFamily: 'Tektur' }}>
              EPOSTA GÖNDER
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
