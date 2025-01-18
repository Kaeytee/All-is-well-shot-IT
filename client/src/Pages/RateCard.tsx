import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomerTestimonials from '../Components/CustomerTestimonials/CustomerTestimonials.tsx';
import Weddings from '../Assets/Weddings';
import Proposals from '../Assets/Proposals';
import Engagements from '../Assets/Engagements';
import wedding from '../Assets/Wedding.png';
import proposal from '../Assets/Proposal.png';
import engagement from '../Assets/Engagement.png';

// Generic Card Component
const RateCardItem = ({ id, title, fee, description, detail1, detail2, detail3 }) => {
  const navigate = useNavigate();

  const handleBookClick = () => {
    navigate('/book-us', {
      state: {
        id,
        title,
        fee,
        description,
        detail1,
        detail2,
        detail3,
      },
    });
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center text-center space-y-4 shadow-lg">
      <h3 className="font-bold text-gray-800 uppercase">{title}</h3>
      <p className="text-2xl font-bold">GHC {fee}</p>
      <p className="text-sm text-gray-600 uppercase">{description}</p>
      <button
        onClick={handleBookClick}
        className="bg-black text-white px-14 py-4 rounded-lg hover:bg-gray-800 transition-colors uppercase text-sm font-medium"
      >
        Book
      </button>
      <ul className="space-y-2 w-full">
        {detail1 && <li className="text-sm text-gray-700">{detail1}</li>}
        {detail2 && <li className="text-sm text-gray-700">{detail2}</li>}
        {detail3 && <li className="text-sm text-gray-700">{detail3}</li>}
      </ul>
    </div>
  );
};

const RateCard = () => {
  return (
    <div className="bg-gray-100">
      <section className="py-16 px-4 relative bg-cover bg-center mb-16" style={{ backgroundImage: `url(${engagement})` }}>
        <div className="absolute inset-0"></div>
        <div className="max-w-6xl mx-auto relative z-10 space-y-8">
          <h2 className="text-3xl font-bold text-center text-white">ENGAGEMENTS</h2>
          <p className="text-white/80 text-center mx-auto text-sm leading-relaxed" style={{ maxWidth: '1186px' }}>
            Change of date can only be made 2 months before the event. Any change of date without
            consultation will result in a fine of GHC 1,000. Pre-weddings should be done at least 3
            weeks before the event. Payments made are not refundable. For travel outside Accra:
            accommodation and transportation is borne by the client.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {Engagements.map((item) => (
              <RateCardItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 relative bg-cover bg-center mb-16" style={{ backgroundImage: `url(${wedding})` }}>
        <div className="absolute inset-0 "></div>
        <div className="max-w-6xl mx-auto relative z-10 space-y-8">
          <h2 className="text-3xl font-bold text-center text-white">WEDDINGS</h2>
          <p className="text-white/80 text-center mx-auto text-sm leading-relaxed" style={{ maxWidth: '1186px' }}>
            Change of date can only be made 2 months before the event. Any change of date without
            consultation will result in a fine of GHC 1,000. Pre-weddings should be done at least 3
            weeks before the event. Payments made are not refundable. For travel outside Accra:
            accommodation and transportation is borne by the client.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {Weddings.map((item) => (
              <RateCardItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 relative bg-cover bg-center mb-16" style={{ backgroundImage: `url(${proposal})` }}>
        <div className="absolute inset-0"></div>
        <div className="max-w-6xl mx-auto relative z-10 space-y-8">
          <h2 className="text-3xl font-bold text-center text-white">PROPOSALS & PREWEDDINGS</h2>
          <p className="text-white/80 text-center mx-auto text-sm leading-relaxed" style={{ maxWidth: '1186px' }}>
            Change of date can only be made 2 months before the event. Any change of date without
            consultation will result in a fine of GHC 1,000. Pre-weddings should be done at least 3
            weeks before the event. Payments made are not refundable. For travel outside Accra:
            accommodation and transportation is borne by the client.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8 max-w-2xl mx-auto">
            {Proposals.map((item) => (
              <RateCardItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      <CustomerTestimonials />
    </div>
  );
};

export default RateCard;