import React from 'react';
import Services from '../../Assets/Services';

const ServiceGrid = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-12 xl:gap-24">
        {Services.map((service, index) => (
          <div
            key={service.id}
            className="bg-white transition-all duration-300 hover:scale-105"
          >
            <div className={`flex items-center p-4 ${index % 3 === 0 ? 'lg:justify-start' : 'lg:justify-center'} justify-center`}>
              <img
                src={service.image}
                alt={service.name}
                className="h-16 w-16 object-contain sm:h-20 sm:w-20"
              />
            </div>
            <div className="p-4 text-center lg:text-left">
              <h2 className="mb-2 text-lg font-semibold text-gray-800 sm:text-xl">
                {service.name}
              </h2>
              <p className="text-sm text-gray-600 sm:text-base">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceGrid;