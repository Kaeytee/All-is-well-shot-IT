import React from 'react';
import Services from '../../Assets/Services';

const ServiceGrid = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-y-40"
        style={{
          gridAutoRows: 'minmax(0, auto)', // Ensure consistent row heights
        }}
      >
        {Services.map((service, index) => (
          <div
            key={service.id}
            className="bg-white overflow-hidden scale-105"
            style={{
              width: 
                index === 0 || index === 3 
                  ? '277px'  // For index 0 and 3
                  : (index === 1 || index === 4) 
                  ? '310px'  // For index 1 and 4
                  : '310px', // For index 2 and 5
              margin: '0 auto', // Center horizontally
            }}
          >
            {/* Image */}
            <div
              className={`flex items-center ${
                index === 0 || index === 3
                  ? 'lg:justify-start'  // Align left on large screens for index 0 and 3
                  : 'lg:justify-center'  // Align center for others
              } sm:justify-center`} // Always center on small screens
              style={{
                padding: '1rem', // Add consistent padding for alignment
              }}
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-[80.909px] h-[74.167px] object-contain"
              />
            </div>

            {/* Content */}
            <div className="p-6 text-center lg:text-left">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {service.name}
              </h2>
              <p className="text-gray-600 text-sm">
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
