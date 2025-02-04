import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomerTestimonials from '../Components/CustomerTestimonials/CustomerTestimonials.tsx';
import Weddings from '../Assets/Weddings';
import Proposal from '../Assets/Proposal.png';
import Engagements from '../Assets/Engagements';
import wedding from '../Assets/Wedding.png';
import engagement from '../Assets/Engagement.png';
import EandW from '../Assets/EandW';
import OtherS from '../Assets/OtherS';

const RateCardItem = ({ id, title, fee, description, detail1, detail2, detail3, showDetails = true }) => {
  const navigate = useNavigate();

  const handleBookClick = () => {
    navigate('/book-us', { state: { id, title, fee, description, detail1, detail2, detail3 } });
  };

  return (
    <div className="bg-white/90 backdrop-blur-lg rounded-xl p-6 flex flex-col items-center text-center space-y-4 shadow-xl hover:shadow-2xl transition-all duration-300">
      <h3 className="text-lg font-bold text-gray-800 uppercase tracking-wide">{title}</h3>
      <p className="text-2xl font-bold text-gray-900">GHC {fee}</p>
      <p className="text-sm text-gray-600 uppercase tracking-tight">{description}</p>
      <button
        onClick={handleBookClick}
        className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors uppercase text-xs font-semibold tracking-wide w-full max-w-[200px]"
      >
        Book Now
      </button>
      {showDetails && (
        <ul className="space-y-2 w-full mt-4 border-t border-gray-100 pt-4">
          {[detail1, detail2, detail3].map((detail, index) => 
            detail && <li key={index} className="text-sm text-gray-600">{detail}</li>
          )}
        </ul>
      )}
    </div>
  );
};

const RateCardSection = ({ title, backgroundImage, items, showDetails = true, columns = 2 }) => (
  <section className="relative py-16 md:py-24 px-4 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
    <div className="max-w-7xl mx-auto relative z-10 space-y-8">
      <h2 className="text-2xl md:text-4xl font-bold text-center text-white uppercase tracking-wider">{title}</h2>
      <p className="text-white/90 text-center mx-auto text-sm md:text-base leading-relaxed max-w-prose">
        Change of date can only be made 2 months before the event. Any change of date without
        consultation will result in a fine of GHC 1,000. Pre-weddings should be done at least 3
        weeks before the event. Payments made are not refundable. For travel outside Accra:
        accommodation and transportation is borne by the client.
      </p>
      <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-6 md:gap-8 mt-8 justify-center`}>
        {items.map((item) => (
          <RateCardItem key={item.id} {...item} showDetails={showDetails} />
        ))}
      </div>
    </div>
  </section>
);

const RateCard = () => {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto space-y-8 px-4 sm:px-6 md:space-y-12 md:px-8 lg:px-16 lg:w-11/12 ">
        <RateCardSection
          title="Traditional Marriage"
          backgroundImage={engagement}
          items={Engagements}
          columns={2}
        />

        <RateCardSection
          title="Weddings"
          backgroundImage={wedding}
          items={Weddings}
          columns={2}
        />

        <RateCardSection
          title="Engagements & Weddings"
          backgroundImage={wedding}
          items={EandW}
          columns={2}
        />

        <RateCardSection
          title="Other Services"
          backgroundImage={Proposal}
          items={OtherS}
          showDetails={false}
          columns={1}
        />
      </div>

      <CustomerTestimonials />
    </div>
  );
};

export default RateCard;