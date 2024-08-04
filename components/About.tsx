import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faLaptopCode, faPaintBrush, faAward } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const abouts = [
  {
    icon: faCogs,
    title: 'Vizyon',
    description: 'MSK Tekstil olarak vizyonumuz, uluslararası düzeyde tanınan ve sürekli olarak sektöre nitelikli insan gücü kazandıran bir firma olmaktır. Sektörde kalite standartlarını belirleyen, yenilikçi ve ileriye dönük bakış açısıyla hareket eden bir kurum olarak, global arenada kabul gören ve saygın bir yer edinmeyi hedeflemekteyiz. Her zaman ileriye bakarak, sektörün ihtiyaçlarına en iyi şekilde cevap verecek şekilde büyümeyi ve gelişmeyi amaçlıyoruz.',
  },
  {
    icon: faLaptopCode,
    title: 'Misyon',
    description: 'Misyonumuz, müşteri odaklı bir yaklaşımla hareket ederek, hızlı servis, üstün kaliteli hizmet ve rekabetçi fiyatlar sunmaktır. "Müşteri en önemli değerimizdir" prensibi doğrultusunda, müşteri memnuniyetini en üst seviyeye çıkararak müşterilerimizin rekabet gücünü artırmayı hedefliyoruz. Teknoloji ve tecrübeyi harmanlayarak, sürekli iyileştirmelerle kendini geliştiren bir kurum oluşturmak, her zaman en iyisini başarmak için çalışıyoruz. Amacımız, müşterilerimize en iyi deneyimi sunmak ve onların beklentilerini aşmaktır.',
  },
  {
    icon: faPaintBrush,
    title: 'Kalite Politikası',
    description: 'MSK Tekstil, kendi sektöründe en güvenilir ve tercih edilen şirketlerden biri olmayı ilke edinmiş olup, yönetim ve kalite politikasını bu doğrultuda düzenlemiştir. Kalite, müşteri memnuniyeti, sürekli iyileştirme ve çevre bilinci, şirketimizin temel değerleri arasında yer almaktadır. Bu değerleri hem üretim sürecimizde hem de iş süreçlerimizde en iyi şekilde uygulayarak, sektörün kalite standartlarını yükseltmek ve müşteri beklentilerini karşılamak için sürekli olarak çaba göstermekteyiz.',
  },
  {
    icon: faAward,
    title: 'Başarılar',
    description: 'MSK Tekstil olarak, yıllardır süregelen kalite anlayışımız ve müşteri odaklı hizmetlerimizle pek çok başarıya imza attık. Her zaman en iyi olmayı hedefleyerek, sektörümüzde lider konumda yer almayı başardık. Yenilikçi yaklaşımımız ve sürdürülebilir stratejilerimizle, müşterilerimize en iyi hizmeti sunmaya devam ediyoruz.',
  },
];

const About = () => {
  const [selectedService, setSelectedService] = useState(abouts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedService((prev) => {
        const currentIndex = abouts.findIndex(service => service.title === prev.title);
        const nextIndex = (currentIndex + 1) % abouts.length;
        return abouts[nextIndex];
      });
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about">
      <div className="bg-white mt-8">
        <div className="container mt-24 mx-auto px-4 text-center">
          <div className="flex flex-col items-center fade-in">
            <div className="w-0.5 h-10 bg-gray-300 mb-4"></div>
            <p className="font-regular text-gray-500 mb-8 mt-4 fade-in" style={{ fontFamily: 'Tektur' }}>Biz Kimiz?</p>
            <h1 className="text-4xl font-bold mb-4 fade-in" style={{ fontFamily: 'Tektur' }}>HAKKIMIZDA</h1>
            <p className="mt-8 mb-24 text-sm w-3/5 mx-auto font-regular text-gray-500 fade-in" style={{ fontFamily: 'Tektur' }}>
              MSK MAĞAZACILIK ®, kurulduğu günden beri izlemiş olduğu yenilikçi, sürdürülebilir ve hep daha iyisini müşterilerine sunması sayesinde sektöründe öncü firmalardan biri haline gelmiştir. Müşterilerine sunduğu süreklilik gösteren yüksek kalitede ürün ve servis sayesinde Türkiye’nin önde gelen hazır giyim firmaları arasında yerini almaktadır.
            </p>
          </div>
          <div className="w-full mt-8 mx-auto grayscale hover:grayscale-0 transition-all duration-500 fade-in ease-in-out">
            <Image src="/prod.png" width={700} height={400} alt="Team" className="mx-auto" />
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-20" style={{ position: 'relative', zIndex: 1 }}>
        <div className="container mx-auto px-4 text-center flex flex-wrap items-center">
          <div className="relative flex items-center justify-center w-full md:w-1/2 fade-in">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 bg-white text-black rounded-full flex flex-col items-center justify-center text-center p-8 shadow-lg transform transition duration-500 hover:scale-105" style={{ fontFamily: 'Tektur' }}>
                <h3 className="text-lg font-bold">{selectedService.title}</h3>
                <p className="text-sm text-gray-500">{selectedService.description}</p>
              </div>
            </div>
            <div className="relative w-full h-full" style={{ height: '500px', width: '500px' }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full rounded-full border-2 border-gray-300"></div>
              </div>
              {abouts.map((service, index) => (
                <div
                  key={index}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full ${
                    selectedService.title === service.title ? 'bg-gray-400' : 'bg-gray-200'
                  }`}
                  style={{
                    left: `${50 + 49 * Math.cos((index * 2 * Math.PI) / abouts.length)}%`,
                    top: `${50 + 49 * Math.sin((index * 2 * Math.PI) / abouts.length)}%`,
                    transform: 'translate(-50%, -50%)',
                    fontFamily: 'Tektur'
                  }}
                  onMouseEnter={() => setSelectedService(service)}
                >
                  <FontAwesomeIcon icon={service.icon} className="text-2xl p-3 rounded-full shadow-md hover:text-black hover:bg-gray-400 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 text-left p-8 fade-in">
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Tektur' }}>SATIŞ ÖNCESİ SORULAR</h2>
            <p className="text-gray-400 text-sm mb-8" style={{ fontFamily: 'Tektur' }}>Etkileşimli iletişim için olası işlevsellikler, süreçten önce ekonomik olarak sağlam altyapılar oluşturur.</p>
            <button className="border border-white text-white py-2 px-6 hover:bg-white hover:text-black transition duration-300" style={{ fontFamily: 'Tektur' }}>BİZE ULAŞIN</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
