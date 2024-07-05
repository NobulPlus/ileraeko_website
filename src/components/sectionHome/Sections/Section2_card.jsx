import React from 'react';
import img1 from '../../../assets/images/img2.jpg';
import img2 from '../../../assets/images/img3.jpg';
import img3 from '../../../assets/images/img4.jpg';

const Section2_card = ({ imageUrl, title, body }) => {
  return (
    <div className="relative m-4 overflow-hidden bg-white rounded-lg shadow-md w-80 h-96">
      <img
        src={imageUrl}
        alt={title}
        className="object-cover w-full h-full transition duration-300 transform hover:scale-95"
      />
      <div className="absolute inset-0 flex flex-col justify-end">
        <div className="p-4 text-black bg-orange-600 bg-opacity-75">
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center transition duration-300 bg-orange-200 bg-opacity-75 opacity-0 hover:opacity-100">
        <div className="p-4 text-center text-gray-900">
          <h3 className="mb-2 text-xl font-bold">{title}</h3>
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};

const ThreeCards = () => {
  return (
    <div className="flex items-center justify-center bg-transparent py-9">
      <div className="flex flex-wrap justify-center">
        <Section2_card
          imageUrl={img1}
          title="Vulnerable"
          body="LASHMA recognizes the unique needs of vulnerable residents, such as the elderly, orphans, and individuals living with HIV/AIDS."
        />
        <Section2_card
          imageUrl={img2}
          title="Preventive Care"
          body="By taking a proactive approach, you empower yourself to live a longer, healthier, and more fulfilling life."
        />
        <Section2_card
          imageUrl={img3}
          title="Global Coverage"
          body=" It's a vision of a world where healthcare isn't a privilege for the few, but a fundamental right for all."
        />
      </div>
    </div>
  );
};

export default ThreeCards;
export { Section2_card };