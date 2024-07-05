import React from 'react';
import img1 from '../../assets/images/img2.jpg';

const Section2_card = ({ imageUrl, title, body }) => {
  return (
    <div className="relative m-4 overflow-hidden bg-white rounded-lg shadow-md w-80 h-96">
      <img
        src={imageUrl}
        alt={title}
        className="object-cover w-full h-full transition duration-300 transform hover:scale-95"
      />
      <div className="absolute inset-0 flex flex-col justify-end">
        <div className="p-4 text-white bg-orange-600 bg-opacity-75">
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center transition duration-300 bg-orange-200 bg-opacity-75 opacity-0 hover:opacity-100">
        <div className="p-4 text-center text-white">
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
          title="Card 1"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium urna eget ligula fringilla, a sodales sapien placerat."
        />
        <Section2_card
          imageUrl="https://via.placeholder.com/400x300"
          title="Card 2"
          body="Vestibulum scelerisque lacinia mi, eget tempus libero ullamcorper vel. Quisque ac tortor leo."
        />
        <Section2_card
          imageUrl="https://via.placeholder.com/400x300"
          title="Card 3"
          body="Nullam lacinia est a lorem commodo, auctor ultricies risus malesuada. Fusce vel rutrum purus."
        />
      </div>
    </div>
  );
};

export default ThreeCards;
export { Section2_card };