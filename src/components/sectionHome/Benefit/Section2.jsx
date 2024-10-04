import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import img1 from '../../../assets/images/img4.png';
import cp from '../../../assets/doc/CPlist.pdf'

const Section4 = () => {
  return (
    <div className="container px-4 pt-24 pb-8 mx-auto">
      <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <img src={img1} alt="Pharmacy Benefits" className="justify-center w-4/5 h-auto mx-12 rounded-md shadow-md" />
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-orange-600 md:text-3xl">Drug Access Expansion</h3>
          <p className="text-lg text-justify text-gray-600 leading-loosed">
            The inclusion of the community pharmacies to the provider network of ILERA EKO is to increase access to quality medicines for all enrollees. The hospitals remain the first point of call for all enrollees. Emergency cases, inpatient admissions, routine ANC medications, and all parenteral medications will be attended to by the hospitals, while the community pharmacies will offer their services to Out-patient ILERA EKO enrollees.
          </p>
          <p>
            <a href={cp} className="inline-flex items-center px-6 py-3 font-semibold text-white transition transform bg-orange-600 rounded-md shadow-md hover:scale-105 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
              SEE OUR COMMUNITY PHARMACY<FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section4;
