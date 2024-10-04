/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Stat = () => {
  const [counterState, setCounterState] = useState(false);
    return (
      <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
        <div className="container px-4 py-12 mx-auto">
          <div className="max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-md">
            <div className="p-6 md:p-8">
              <div className="flex items-center mb-6">
                <div className="p-2 mr-4 bg-orange-600 rounded-full">
                  <i className="text-white fa-solid fa-square-poll-vertical"></i>
                </div>
                <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">Statistics</h1>
              </div>
              <p className="mb-8 leading-relaxed text-gray-600">
                We have over 390 and still counting Health Care Providers and Over  1.15 million lives registered on the scheme as at the end of <b>September</b> 2024 registered with numbers continuing to grow.</p>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="p-6 text-center bg-gray-100 rounded-lg md:p-8">
                  <div className="mb-2 text-4xl font-bold text-gray-800 md:text-5xl">
                    {counterState && <CountUp start={0} end={1152455} duration={5} />}
                  </div>
                  <h5 className="text-lg font-semibold text-gray-600">Lives</h5>
                </div>
                <div className="p-6 text-center bg-gray-100 rounded-lg md:p-8">
                  <div className="mb-2 text-4xl font-bold text-gray-800 md:text-5xl">
                    {counterState && <CountUp start={0} end={395} duration={5} />}
                  </div>
                  <h5 className="text-lg font-semibold text-gray-600">Care Providers</h5>
                </div>
                <div className="p-6 text-center bg-gray-100 rounded-lg md:p-8">
                  <div className="mb-2 text-4xl font-bold text-gray-800 md:text-5xl">
                    {counterState && <CountUp start={0} end={52260} duration={5} />}
                  </div>
                  <h5 className="text-lg font-semibold text-gray-600">Maternal Cases</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    );
};

export default Stat;
