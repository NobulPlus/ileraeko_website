import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  let timeoutId;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setDropdownOpen(false);
    }, 500); // 500ms delay before closing dropdown
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleMobileDropdown = () => {
    setMobileDropdownOpen(!mobileDropdownOpen);
  };

  return (
    <div className="bg-[#fbcb8d] py-6">
      <div className='container flex items-center justify-between mx-auto'>
        <div>
          <img src={logo} alt="ilera-logo" className='z-10 w-[50%] md:w-[50%]' />
        </div>
        <div className='hidden md:flex items-center gap-[52px]'>
          <ul className='flex items-center gap-[40px] cursor-pointer font-semibold'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/plan'>Plans</Link></li>
            <li
              className='relative group'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link to='#' className='hover:text-[#495057]' onClick={toggleDropdown}>Our Network</Link>
              <ul className={`absolute left-0 ${dropdownOpen ? 'block' : 'hidden'} group-hover:block flex-col bg-amber-100 shadow-lg rounded-md mt-2 w-56 space-y-4 py-4 transition-opacity duration-300 ease-in-out z-20`}>
                <li><Link to='https://lashma.com/' className='hover:bg-[#f1f1f1] py-2 px-4 rounded-md'>LASHMA</Link></li>
                <li><Link to='https://lagosstate.gov.ng/' className='hover:bg-[#f1f1f1] py-2 px-4 rounded-md'>Lagos State</Link></li>
                <li><Link to='https://lshsregulations.com/' className='hover:bg-[#f1f1f1] py-2 px-4 rounded-md'>LSHS Regulation</Link></li>
                <li><Link to='/resources' className='hover:bg-[#f1f1f1] py-2 px-4 rounded-md'>Resources</Link></li>
                <li><Link to='https://ekosha.org' className='hover:bg-[#f1f1f1] py-2 px-4 rounded-md'>EKOSHA</Link></li>
              </ul>
            </li>
            <li><Link to='/contactus'>Contact Us</Link></li>
          </ul>
          <div className='flex items-center gap-4'>
            <button className='bg-[#f28201] py-[10px] px-[20px] text-white text-[16px] font-semibold tracking-[0.4px] cursor-pointer rounded-[7px] hover:bg-amber-500 hover:text-black transition duration-300'>
              <Link to='https://selfregistration.lshsportal.com:467/'>Enroll Now</Link>
            </button>
            <button className='bg-amber-500 py-[10px] px-[20px] text-white text-[16px] font-semibold tracking-[0.4px] cursor-pointer rounded-[7px] hover:bg-[#e06f00] hover:text-black transition duration-300'>
              <Link to='https://lshs-paypolicy.com:8082/'>Make Payment</Link>
            </button>
          </div>
        </div>
        <div className='md:hidden flex items-center'>
          <button onClick={toggleMobileMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className='md:hidden bg-amber-100 shadow-lg mt-4'>
          <ul className='flex flex-col items-center gap-6 py-4 cursor-pointer font-semibold'>
            <li><Link to='/' onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
            <li><Link to='/plan' onClick={() => setMobileMenuOpen(false)}>Plans</Link></li>
            <li className='relative group'>
              <button onClick={toggleMobileDropdown} className='hover:text-[#495057]'>Our Network</button>
              {mobileDropdownOpen && (
                <ul className='flex-col bg-amber-100 shadow-lg rounded-md mt-2 w-56 space-y-4 py-4 transition-opacity duration-300 ease-in-out z-20'>
                  <li><Link to='https://lashma.com/' className='hover:bg-[#f1f1f1] py-2 px-4 rounded-md'>LASHMA</Link></li>
                  <li><Link to='https://lagosstate.gov.ng/' className='hover:bg-[#f1f1f1] py-2 px-4 rounded-md'>Lagos State</Link></li>
                  <li><Link to='https://lshsregulations.com/' className='hover:bg-[#f1f1f1] py-2 px-4 rounded-md'>LSHS Regulation</Link></li>
                  <li><Link to='/resources' className='hover:bg-[#f1f1f1] py-2 px-4 rounded-md'>Resources</Link></li>
                  <li><Link to='https://ekosha.org' className='hover:bg-[#f1f1f1] py-2 px-4 rounded-md'>EKOSHA</Link></li>
                </ul>
              )}
            </li>
            <li><Link to='/contactus' onClick={() => setMobileMenuOpen(false)}>Contact Us</Link></li>
          </ul>
          <div className='flex flex-col items-center gap-4 py-4'>
            <button className='bg-[#f28201] py-[10px] px-[20px] text-white text-[16px] font-semibold tracking-[0.4px] cursor-pointer rounded-[7px] hover:bg-amber-500 hover:text-black transition duration-300'>
              <Link to='https://selfregistration.lshsportal.com:467/' onClick={() => setMobileMenuOpen(false)}>Enroll Now</Link>
            </button>
            <button className='bg-amber-500 py-[10px] px-[20px] text-white text-[16px] font-semibold tracking-[0.4px] cursor-pointer rounded-[7px] hover:bg-[#e06f00] hover:text-black transition duration-300'>
              <Link to='https://lshs-paypolicy.com:8082/' onClick={() => setMobileMenuOpen(false)}>Make Payment</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
