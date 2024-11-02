import React from 'react';
import Image from 'next/image';

interface ServiceCardProps {
  title?: string;
  acronym?: string;
  services?: string[];
  logoSrc?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title = 'Service Title',
  acronym = 'ABC',
  services = [],
  logoSrc = '/api/placeholder/200/100',
}) => {
  return (
    <div className="w-[70%] md:w-full max-w-md bg-white rounded-lg shadow-lg">
      <div className="p-6 space-y-2">
        <div className="space-y-1">
          <h3 className="text-[#BADA55] font-bold text-xl">{acronym}</h3>
          <h4 className="text-[#0B2B61] text-lg font-medium">{title}</h4>
        </div>
        <ul className="space-y-2 pt-4">
          {services.map((service, index) => (
            <li key={index} className="text-gray-700">
              • {service}
            </li>
          ))}
        </ul>
        <div className="pt-4">
          <button className="text-[#BADA55] hover:text-[#98b548] font-medium">
            Read More
          </button>
        </div>
      </div>
      {/* <div className="px-6 pb-6 relative">
        <div className="relative w-48 h-24">
          <Image
            src={logoSrc}
            alt={`${title} logo`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div> */}
    </div>
  );
};

interface Service {
  acronym: string;
  title: string;
  services: string[];
  logoSrc: string;
}

const ServiceCards = () => {
  const services: Service[] = [
    {
      acronym: 'FDS',
      title: 'Falcon Drilling Systems',
      services: ['Directional Drilling', 'LWD', 'MWD'],
      logoSrc: '/api/placeholder/200/100',
    },
    {
      acronym: 'FWM',
      title: 'Falcon Well Maintenance',
      services: ['Well Head Maintenance', 'Slickline', 'NCP'],
      logoSrc: '/api/placeholder/200/100',
    },
  ];

  return (
    <>
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </>
  );
};

export default ServiceCards;
