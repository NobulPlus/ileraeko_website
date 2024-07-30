import React from 'react';
import img1 from '../../../assets/images/img1.png';
import { Link } from 'react-router-dom';

const MobileApp = () => {
  return (
    <div className="py-12 bg-gradient-to-r from-orange-200 to-orange-400">
      <div className="container grid items-center grid-cols-1 gap-8 px-4 mx-auto md:grid-cols-2">
        <div className="space-y-6 text-white">
          <h1 className="text-3xl font-bold md:text-4xl">Less paper, more speed</h1>
          <p className="text-lg leading-relaxed">
            Say goodbye to painful paper processes and protracted wait times. Our platform simplifies the claims process and our app lets employees access healthcare instantly via telemedicine.
          </p>
          <Link 
            to='https://play.google.com/store/apps/details?id=com.lashma.app' 
            className="inline-block px-6 py-3 font-semibold text-orange-700 bg-white rounded-md shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
            ABOUT OUR TECHNOLOGY
          </Link>
        </div>
        <div>
          <img src={img1} alt="Mobile App" className="w-full h-auto bg-center bg-cover bg-mobile-bg bg-blend-overlay" />
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
