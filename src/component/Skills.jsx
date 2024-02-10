import React from 'react'
import Dropdown from './Dropdown'
import { Link } from 'react-router-dom'
import FiveStars from '../assets/FiveStars'
import TwoStars from '../assets/TwoStars'

const Skills = () => {
  return (
    <div className='flex flex-col gap-5 py-5 sm:py-12 px-3 sm:px-24 h-screen relative' id='about'>
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

        <main className=''>
          <h1 className='text-[#FC3F04] text-2xl pb-8'>// Skills</h1>
            <div className='sm:w-[80%] mx-auto flex flex-wrap justify-between gap-5'>
              <div className='w-1/4 sm:w-1/5 text-xl'>
                <p>HTML</p>
                <TwoStars />
              </div>
              <div className='w-1/4 sm:w-1/5 text-xl'>
                <p>PYTHON</p>
                <FiveStars />
              </div>
              <div className='w-1/4 sm:w-1/5 text-xl'>
                <p>PHP</p>
                <FiveStars />
              </div>
              <div className='w-1/4 sm:w-1/5 text-xl'>
                <p>LARAVEL</p>
                <FiveStars />
              </div>
              <div className='w-1/4 sm:w-1/5 text-xl'>
                <p>CSS</p>
                <TwoStars />
              </div>
              <div className='w-1/4 sm:w-1/5 text-xl'>
                <p>DJANGO</p>
                <TwoStars />
              </div>
              <div className='w-1/4 sm:w-1/5 text-xl'>
                <p>JS</p>
                <TwoStars />
              </div>
              <div className='w-1/4 sm:w-1/5 text-xl'>
                <p>REACT</p>
                <TwoStars />
              </div>
              <div className='w-1/4 sm:w-1/5 text-xl'>
                <p>DART</p>
                <FiveStars />
              </div>
              <div className='w-1/4 sm:w-1/5 text-xl'>
                <p>VUE</p>
                <FiveStars />
              </div>
              <div className='w-1/4 sm:w-1/5 text-xl'>
                <p>MS</p>
                <FiveStars />
              </div>
              <div className='w-1/4 sm:w-1/5 text-xl'>
                <p>FLUTTER</p>
                <FiveStars />
              </div>
              <div className='w-1/4 sm:w-1/5 text-xl'>
                <p>RUBY</p>
                <FiveStars />
              </div>
              
            </div>
        </main>

    </div>
  )
}

export default Skills