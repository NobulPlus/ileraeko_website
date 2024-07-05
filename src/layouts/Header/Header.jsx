import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <div className="bg-[#fbcb8d] pt-8">   
      <div className='container flex items-center justify-between mx-auto'>
          <div>
              <img src={logo} alt="ilera-logo" className='z-10 w-[50%]' />
          </div>
          <div className='flex items-center gap-[52px]'>
              <ul className='flex items-center gap-[40px] cursor-pointer font-semibold'>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/plan'>Plans</Link></li>
                  <li><Link to='/about'>About</Link></li>
                  <li><Link to='#'>Our Network</Link></li>
                  <li><Link to='/contactus'>Contact Us</Link></li>
              </ul>
              <button className='bg-[#f28201] py-[10px] px-[20px] text-white text-[16px] font-semibold tracking-[0.4px] cursor-pointer rounded-[7px] hover:bg-[#e06f00] transition duration-300'>Enroll Now</button>
          </div>
      </div>
    </div>
  )
}

export default Header