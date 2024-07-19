import React from 'react'
import { Link } from 'react-router-dom'
import providers from '../../../assets/doc/ProviderList_June2024.pdf'

const Section1 = () => {
  return (
    <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-4 pt-[25px] pb-[25px]">
            <div className="p-6 text-center bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-[#f28201]">BUY A HEALTH PLAN</h3>
                <p className="mb-6 text-gray-700">You deserve the best, let us help you find the plan that best suits you and the people that matter to you.</p>
            <button className="bg-[#f28201] text-white py-2 px-4 rounded hover:bg-[#e06f00] transition duration-300"><Link to='/plan'>See plans</Link></button>
            </div>
            <div className="p-6 text-center bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-[#f28201]">HELLO DOC!</h3>
            <p className="mb-6 text-gray-700">Not sure if your symptoms are a big deal? Talk to a medical doctor over the phone now.</p>
            <button className="bg-[#f28201] text-white py-2 px-4 rounded hover:bg-[#e06f00] transition duration-300"><a href='tel:080000358828'>Say Hello</a></button>
            </div>
            <div className="p-6 text-center bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-[#f28201]">FIND A PROVIDER</h3>
            <p className="mb-6 text-gray-700">Find hospitals, pharmacies, and other providers near your preferred location.</p>
            <button className="bg-[#f28201] text-white py-2 px-4 rounded hover:bg-[#e06f00] transition duration-300"><a href={providers}>Locate a provider</a></button>
            </div>
            <div className="p-6 text-center bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-[#f28201]">BECOME A PROVIDER</h3>
            <p className="mb-6 text-gray-700">We have a track record of prompt claims payment. Join us today!</p>
            <button className="bg-[#f28201] text-white py-2 px-4 rounded hover:bg-[#e06f00] transition duration-300"><Link to='/contactus'>Join our provider network</Link></button>
            </div>
        </div>
    </div>
  )
}

export default Section1