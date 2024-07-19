import React from 'react';
import { Link } from 'react-router-dom';

const Section2 = () => {
  return (
    <div className="py-12 bg-center bg-cover section2 bg-gradient-to-b from-orange-600 to-orange-900 bg-blend-overlay">
      <div className="container px-4 mx-auto">
        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
          <div className="text-white">
            <h2 className="mb-4 text-4xl font-bold">Going the Extra Mile Just for YOU.</h2>
            <p className="text-lg">Experience the care that meets your needs. See how we are building a better experience tailored for you.</p>
          </div>
          <div className="flex flex-row items-center justify-center space-x-6 md:items-start"> {/* Center items vertically and horizontally on small screens, start on medium screens */}
            <button className="px-6 py-3 mb-4 text-white bg-orange-900 rounded-md shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
              <Link to='https://selfregistration.lshsportal.com:467/'>Start Now</Link>
            </button>
            <button className="px-6 py-3 text-white bg-orange-900 rounded-md shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
              <Link to='/plan'>View Plans</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
