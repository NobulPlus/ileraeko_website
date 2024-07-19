import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import img1 from '../../../assets/images/img4.png';

const Section4 = () => {
  return (
    <div className="container px-4 pt-24 pb-8 mx-auto">
      <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <img src={img1} alt="Pharmacy Benefits" className="justify-center w-4/5 h-auto mx-12 rounded-md shadow-md" />
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-orange-600 md:text-3xl">Advanced Pharmacy Benefits</h3>
          <p className="text-lg text-justify text-gray-600 leading-loosed">
            Delivery of prescription drugs to your homes or offices (for people with chronic illnesses) and the option to pick up preferred brand of drugs from partner pharmacies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section4;
