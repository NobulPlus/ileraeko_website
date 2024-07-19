import React from 'react'
import headImg from '../../assets/images/img3.png'
import { Link } from 'react-router-dom'

const Head = () => {
  return (
    <div className='bg-[#fde4be] bg-custom-bg bg-cover bg-center bg-blend-overlay'>
        <div className='container pt-[20px] mx-auto'>
            <div className='grid grid-cols-2 mt-[40px] pb-[5px]'>
                <div>
                    <div className='text-gray-900 pt-[50px]'>
                        <h3 className='text-[48px] leading-[58px] w-[80%] font-bold mt-[50px]'>Health plans as unique as you</h3>
                        <p className='text-[15px] text-justify leading-[28px] font-normal mt-[30px] w-[82%]'>Welcome to ILERA EKO. Where trusted care, guidance and quality health insurance benefits come together to meet your unique needs. <span className='float-right italic text-[#f28201] text-shadow-black'>...leaving no one behind</span></p>
                    </div>
                    <div className='mt-[50px] flex gap-[20px]'>
                        <button className='bg-[#f28201] py-[10px] px-[20px] text-white text-[16px] font-semibold tracking-[0.4px] cursor-pointer rounded-[7px] hover:bg-[#e06f00] transition duration-300'><Link to='/plan'>View Plans</Link></button>
                        <button className='bg-white py-[10px] px-[20px] text-[#f28201] text-[16px] font-semibold tracking-[0.4px] cursor-pointer rounded-[7px] border border-[#f28201] hover:bg-[#fde4be] transition duration-300'><Link to='https://selfregistration.lshsportal.com:467/'>Get Started</Link></button>
                    </div>
                </div>
                <div className='flex items-center justify-end'>
                    <img src={headImg} className='z-10' alt="Health plans" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Head