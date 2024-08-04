import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin, faPhone, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const data = [
  {
    id: 1,
    contact_head_subtitle: 'Office Address',
    contact_head_text_icon: <FontAwesomeIcon icon={faMapPin} />,
    contact_head_body: 'Good Shepherd House, Opposite Secretariat Gate, Alausa Ikeja, Lagos',
    contact_head_button: <Link to='https://maps.app.goo.gl/NCT5rVk365iwaQ5Z9'>Find Us</Link>
  },
  {
    id: 2,
    contact_head_subtitle: 'Place A Call!',
    contact_head_text_icon: <FontAwesomeIcon icon={faPhone} />,
    contact_head_body: '(234) 0800-4537-2356',
    contact_head_button: <Link to='tel:+23480045372356'>Make A Call</Link>
  },
  {
    id: 3,
    contact_head_subtitle: 'Send A Message',
    contact_head_text_icon: <FontAwesomeIcon icon={faWhatsapp} />,
    contact_head_body: '(234) 0800-4537-2356',
    contact_head_button: <Link to='https://wa.me/23480045372356'>Say Hi!</Link>
  },
  {
    id: 4,
    contact_head_subtitle: 'Email Address',
    contact_head_text_icon: <FontAwesomeIcon icon={faEnvelopeOpenText} />,
    contact_head_body: 'ileraeko@lashma.com',
    contact_head_button: <Link to='mailto:ileraeko@lashma.com'>Email Us</Link>
  }
];

const Contact = () => {
  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {data.map(({ id, contact_head_body, contact_head_subtitle, contact_head_text_icon, contact_head_button }) => (
          <div key={id} className="p-6 text-center transition duration-300 transform bg-white rounded-lg shadow-lg hover:scale-105">
            <div className="mb-4 text-primary">
              <div className="text-4xl text-orange-500">
                {contact_head_text_icon}
              </div>
              <h3 className="mt-2 text-xl font-semibold">{contact_head_subtitle}</h3>
            </div>
            <div className="mb-6 text-lg">
              {contact_head_body}
            </div>
            <div>
              <button className="px-4 py-2 text-white transition duration-300 bg-orange-500 rounded-lg hover:bg-orange-600">
                {contact_head_button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
