import React,{ useState, useEffect } from 'react'
import Dropdown from './Dropdown'
import { Link } from 'react-router-dom'
import sawlew from '../assets/sawlew.jpg'

const About = () => {
  const [homeScreenHeight, setHomeScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
      const updateHeight = () => {
        setHomeScreenHeight(window.innerHeight);
      };
  
      window.addEventListener('resize', updateHeight);
  
      setHomeScreenHeight(window.innerHeight);

      return () => {
        window.removeEventListener('resize', updateHeight);
      };
    }, []);

  return (
    <div className='flex flex-col gap-5 py-5 sm:py-12 px-3 sm:px-24' id='about' style={{ height: `${homeScreenHeight}px` }}>
        <header className='flex justify-between items-center'>
            <p className='font-bold text-lg select-none'>Abdullah</p>
            <nav className='hidden sm:flex  gap-40'>
                <Link to={"/"} className='hover:text-[#FC3F04] ease-in duration-300'>Home</Link>
                <Link to={"/projects"} className='hover:text-[#FC3F04] ease-in duration-300'>Projects</Link>
            </nav>
            <div className='flex sm:hidden'>
              <svg xmlns="http://www.w3.org/2000/svg" id="menu" className="w-10 text-3xl cursor-pointer" viewBox="0 0 512 512">
                <path strokeLinecap="round" strokeMiterlimit="10" strokeWidth="48" stroke='currentColor' d="M88 152h336M88 256h336M88 360h336" fill='white'></path>
              </svg>
            </div>
            <Dropdown />
        </header>

        <main>
          <h1 className='text-[#FC3F04] text-2xl'>// About me</h1>
            <div id='scrollable' className='sm:flex sm:flex-row-reverse justify-between sm:items-start h-[600px] sm:h-auto overflow-y-scroll no-scrollbar scroll-smooth'>
              <div id='aboutPicture' className='w-[250px] h-[250px] mx-auto sm:w-[400px] sm:h-[400px] rounded-full'>
                {/* <img src={sawlew} alt="" className='h-fit w-fit' /> */}
              </div>
              <div className='sm:w-1/2 text-center sm:text-left h-full'>
                <p className='pt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, laudantium exercitationem nobis similique recusandae, et repellat amet ab, sapiente sunt dolore. Fugit laborum doloremque blanditiis quod itaque vel eius veniam?</p>
                <p className='pt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, laudantium exercitationem nobis similique recusandae, et repellat amet ab, sapiente sunt dolore. Fugit laborum doloremque blanditiis quod itaque vel eius veniam?</p>
                <p className='pt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, laudantium exercitationem nobis similique recusandae, et repellat amet ab, sapiente sunt dolore. Fugit laborum doloremque blanditiis quod itaque vel eius veniam?</p>
              </div>
              
            </div>
        </main>

    </div>
  )
}

export default About