import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import img1 from '../../../assets/images/img6.jpg';

const Section3 = () => {
  return (
    <div className="container px-4 py-12 mx-auto">
      <h3 className="mb-8 text-2xl font-semibold text-center text-black md:text-3xl">Exclusive Benefits</h3>
      <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
        <div className="max-w-md mx-auto space-y-6 text-justify">
          <h1 className="text-3xl font-bold text-gray-800 md:text-4xl">
            Keep your team <span className="text-orange-600">hale and hearty</span>
          </h1>
          <p className="text-lg leading-loose text-gray-600">
            Get a proactive health management plan for your employees that helps them thrive at work, while giving their families tangible healthcare benefits so they have one less thing to worry about.
          </p>
          <p>
            <Link to="/plan" className="inline-flex items-center px-6 py-3 font-semibold text-white transition transform bg-orange-600 rounded-md shadow-md hover:scale-105 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
              SEE OUR HEALTH PLANS <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </Link>
          </p>
        </div>
        <div>
          <img src={img1} alt="Health plans" className="w-4/5 h-auto rounded-md shadow-md" />
        </div>
      </div>
    </div>
  );
};

export default Section3;
