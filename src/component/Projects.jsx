import React from 'react'
import Dropdown from './Dropdown'
import Adron from '../assets/Adron.png'
import Bond from '../assets/BondMobile.png'
import CashAfrica from '../assets/CashAfrica.png'

import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div className='flex flex-col gap-5 py-5 sm:py-12 px-3 sm:px-24 h-screen overflow-hidden' id='about'>
        <header className='flex justify-between items-center'>
            <p className='font-bold text-lg select-none'>Abdullah</p>
            <nav className='hidden sm:flex  gap-40'>
              <Link to={"/"} className='hover:text-[#FC3F04] ease-in duration-300'>Home</Link>
              <Link to={"/about"} className='hover:text-[#FC3F04] ease-in duration-300'>About</Link>
              <Link to={"/contact"} className='hover:text-[#FC3F04] ease-in duration-300'>Contact</Link>
            </nav>
            <div className='flex sm:hidden'>
              <svg xmlns="http://www.w3.org/2000/svg" id="menu" className="w-10 text-3xl cursor-pointer" viewBox="0 0 512 512">
                <path strokeLinecap="round" strokeMiterlimit="10" strokeWidth="48" stroke='currentColor' d="M88 152h336M88 256h336M88 360h336" fill='white'></path>
              </svg>
            </div>
            <Dropdown />
        </header>

        <main>
        <h1 className='text-[#FC3F04] text-2xl pb-2 sm:pb-5'>// Projects</h1>
        <div id='scrollable' className='no-scrollbar w-[90%] mx-auto sm:flex gap-14 overflow-y-scroll sm:overflow-x-scroll scroll-smooth'>
          <div className='sm:min-w-[500px] rounded-lg my-4 sm:my-0 flex flex-col bg-[#141414] border border-gray-800 h-auto justify-center items-center px-10 sm:px-20 py-2'>
            {/* <div className='w-full'> */}
              <p className='font-semibold'>Adron Homes</p>
            {/* </div> */}
            
            <div className='flex flex-col justify-center items-center'>
              <div className='pb-3'>
                <img src={Adron} alt="" className='w-full' />
              </div>
              <p className='text-center text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio reprehenderit, natus nulla aliquid incidunt</p>
              <div className='flex gap-2 text-[#FF5349] text-[10px] sm:text-xs py-2'>
                <div className='flex items-center gap-1'>
                  <div className='w-2 h-2 sm:w-3 sm:h-3 bg-[#FF5349] rounded-full'></div>
                  <p>Back-End Engineering</p>
                </div>
                <div className='flex items-center gap-1'>
                  <div className='w-2 h-2 sm:w-3 sm:h-3 bg-[#FF5349] rounded-full'></div>
                  <p>Mobile Engineering</p>
                </div>
              </div>
              <a href="#" className='text-xs'>https://adronhomes.com</a>
            </div>
          </div>
          <div className='sm:min-w-[500px] rounded-lg my-4 sm:my-0 flex flex-col bg-[#141414] border border-gray-800 h-auto justify-center items-center px-10 sm:px-20 py-2'>
            {/* <div className='w-full'> */}
              <p className='font-semibold'>Bond Mobile</p>
            {/* </div> */}
            
            <div className='flex flex-col justify-center items-center'>
              <div className='pb-3'>
                <img src={Bond} alt="" className='w-full' />
              </div>
              <p className='text-center text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio reprehenderit, natus nulla aliquid incidunt</p>
              <div className='flex gap-2 text-[#FF5349] text-[10px] sm:text-xs py-2'>
                <div className='flex items-center gap-1'>
                  <div className='w-2 h-2 sm:w-3 sm:h-3 bg-gray-500 rounded-full'></div>
                  <p className='text-gray-500'>Back-End Engineering</p>
                </div>
                <div className='flex items-center gap-1'>
                  <div className='w-2 h-2 sm:w-3 sm:h-3 bg-[#FF5349] rounded-full'></div>
                  <p>Mobile Engineering</p>
                </div>
              </div>
              <a href="#" className='text-xs'>https://adronhomes.com</a>
            </div>
          </div>
          <div className='sm:min-w-[500px] rounded-lg my-4 sm:my-0 flex flex-col bg-[#141414] border border-gray-800 h-auto justify-center items-center px-10 sm:px-20 py-2'>
            {/* <div className='w-full'> */}
              <p className='font-semibold'>Cash Africa</p>
            {/* </div> */}
            
            <div className='flex flex-col justify-center items-center'>
              <div className='pb-3'>
                <img src={CashAfrica} alt="" className='w-full' />
              </div>
              <p className='text-center text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio reprehenderit, natus nulla aliquid incidunt</p>
              <div className='flex gap-2 text-[#FF5349] text-[10px] sm:text-xs py-2'>
                <div className='flex items-center gap-1'>
                  <div className='w-2 h-2 sm:w-3 sm:h-3 bg-[#FF5349] rounded-full'></div>
                  <p>Back-End Engineering</p>
                </div>
                <div className='flex items-center gap-1'>
                  <div className='w-2 h-2 sm:w-3 sm:h-3 bg-[#FF5349] rounded-full'></div>
                  <p>Mobile Engineering</p>
                </div>
              </div>
              <a href="#" className='text-xs'>https://adronhomes.com</a>
            </div>
          </div>
        </div>
            
        </main>

    </div>
  )
}

export default Projects