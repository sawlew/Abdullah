import React,{ useState, useEffect } from 'react'
import Dropdown from './Dropdown'
import { Link } from 'react-router-dom'

const Contact = () => {
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
                <Link to={"/about"} className='hover:text-[#FC3F04] ease-in duration-300'>About</Link>
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
        <h1 className='text-[#FC3F04] text-2xl pb-5'>// Get in touch</h1>
            <div className='flex flex-col-reverse sm:flex-row'>
              <div className='sm:w-1/2'>
                
                <p className='hidden sm:block pt-5 text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, laudantium exercitationem nobis similique recusandae, et repellat amet ab, sapiente sunt dolore. Fugit laborum doloremque blanditiis quod itaque vel eius veniam?</p>
                
                <div className='flex flex-wrap sm:flex-col justify-between gap-5 text-xs sm:text-xl mt-5'>
                  
                  <a href="#" className='flex w-fit items-center gap-3 hover:text-[#FC3F04] ease-in duration-300'>
                    <svg className='w-5 h-5 sm:w-10 sm:h-10' viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M41.3902 32.2649L40.2527 33.3974C40.2527 33.3974 37.5452 36.0875 30.1577 28.7424C22.7702 21.3974 25.4777 18.7074 25.4777 18.7074L26.1927 17.9924C27.9602 16.2374 28.1277 13.4174 26.5852 11.3574L23.4352 7.14995C21.5252 4.59995 17.8377 4.26245 15.6502 6.43745L11.7252 10.3374C10.6427 11.4174 9.91769 12.8124 10.0052 14.3624C10.2302 18.3299 12.0252 26.8624 22.0352 36.8175C32.6527 47.3725 42.6152 47.7924 46.6877 47.4124C47.9777 47.2924 49.0977 46.6374 50.0002 45.7374L53.5502 42.2074C55.9502 39.8249 55.2752 35.7374 52.2052 34.07L47.4302 31.4725C45.4152 30.3799 42.9652 30.7 41.3902 32.2649Z" fill="#FC3F04"/>
                    </svg>
                    <p>234-80-24182946</p>
                  </a>

                  <a href="#" className='flex w-fit items-center gap-3 sm:mt-5 hover:text-[#FC3F04] ease-in duration-300'>
                    <svg className='w-5 h-5 sm:w-10 sm:h-10' viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5375 47.5C10.3875 47.5 9.4275 47.115 8.6575 46.345C7.88583 45.5733 7.5 44.6125 7.5 43.4625V16.5375C7.5 15.3875 7.88583 14.4275 8.6575 13.6575C9.4275 12.8858 10.3875 12.5 11.5375 12.5H48.4625C49.6125 12.5 50.5725 12.8858 51.3425 13.6575C52.1142 14.4275 52.5 15.3875 52.5 16.5375V43.4625C52.5 44.6125 52.115 45.5725 51.345 46.3425C50.5733 47.1142 49.6125 47.5 48.4625 47.5H11.5375ZM30 30.2875L50 17.2125L49.23 15L30 27.5L10.77 15L10 17.2125L30 30.2875Z" fill="#FC3F04"/>
                    </svg>
                    <p>sawlew@gmail.com</p>
                  </a>

                  <a href="#" className='flex w-fit items-center gap-3 sm:mt-5 hover:text-[#FC3F04] ease-in duration-300'>
                    <svg className='w-5 h-5 sm:w-10 sm:h-10' viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M45 7.5C46.9891 7.5 48.8968 8.29018 50.3033 9.6967C51.7098 11.1032 52.5 13.0109 52.5 15V45C52.5 46.9891 51.7098 48.8968 50.3033 50.3033C48.8968 51.7098 46.9891 52.5 45 52.5H15C13.0109 52.5 11.1032 51.7098 9.6967 50.3033C8.29018 48.8968 7.5 46.9891 7.5 45V15C7.5 13.0109 8.29018 11.1032 9.6967 9.6967C11.1032 8.29018 13.0109 7.5 15 7.5H45ZM20 25C19.337 25 18.7011 25.2634 18.2322 25.7322C17.7634 26.2011 17.5 26.837 17.5 27.5V40C17.5 40.663 17.7634 41.2989 18.2322 41.7678C18.7011 42.2366 19.337 42.5 20 42.5C20.663 42.5 21.2989 42.2366 21.7678 41.7678C22.2366 41.2989 22.5 40.663 22.5 40V27.5C22.5 26.837 22.2366 26.2011 21.7678 25.7322C21.2989 25.2634 20.663 25 20 25ZM27.5 22.5C26.837 22.5 26.2011 22.7634 25.7322 23.2322C25.2634 23.7011 25 24.337 25 25V40C25 40.663 25.2634 41.2989 25.7322 41.7678C26.2011 42.2366 26.837 42.5 27.5 42.5C28.163 42.5 28.7989 42.2366 29.2678 41.7678C29.7366 41.2989 30 40.663 30 40V30.85C30.7625 29.99 32.05 28.98 33.4825 28.3675C34.315 28.0125 35.5675 27.8675 36.4375 28.1425C36.7261 28.2157 36.9832 28.3807 37.17 28.6125C37.3 28.7875 37.5 29.1775 37.5 30V40C37.5 40.663 37.7634 41.2989 38.2322 41.7678C38.7011 42.2366 39.337 42.5 40 42.5C40.663 42.5 41.2989 42.2366 41.7678 41.7678C42.2366 41.2989 42.5 40.663 42.5 40V30C42.5 28.325 42.075 26.835 41.19 25.64C40.3756 24.5564 39.2359 23.7618 37.9375 23.3725C35.6825 22.665 33.185 23.0575 31.5175 23.7725C30.9832 24.0012 30.4631 24.2616 29.96 24.5525C29.8552 23.9765 29.5515 23.4555 29.102 23.0804C28.6524 22.7053 28.0855 22.4999 27.5 22.5ZM20 17.5C19.337 17.5 18.7011 17.7634 18.2322 18.2322C17.7634 18.7011 17.5 19.337 17.5 20C17.5 20.663 17.7634 21.2989 18.2322 21.7678C18.7011 22.2366 19.337 22.5 20 22.5C20.663 22.5 21.2989 22.2366 21.7678 21.7678C22.2366 21.2989 22.5 20.663 22.5 20C22.5 19.337 22.2366 18.7011 21.7678 18.2322C21.2989 17.7634 20.663 17.5 20 17.5Z" fill="#FC3F04"/>
                    </svg>
                    <p>linkedin.com/in/sawlew</p>
                  </a>

                  <a href="#" className='flex w-fit items-center gap-3 sm:mt-5 hover:text-[#FC3F04] ease-in duration-300'>
                    <svg className='w-5 h-5 sm:w-10 sm:h-10' viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M52.2 7.7475C50.3675 5.915 48.1625 5 45.5825 5H14.365C11.785 5 9.58 5.915 7.7475 7.7475C5.915 9.58 5 11.785 5 14.365V45.5825C5 48.1625 5.915 50.3675 7.7475 52.2C9.58 54.0325 11.785 54.9475 14.365 54.9475H21.65C22.125 54.9475 22.4825 54.93 22.7225 54.8975C23.0017 54.8415 23.2538 54.6926 23.4375 54.475C23.675 54.225 23.795 53.8625 23.795 53.3875L23.7775 51.175C23.7675 49.765 23.7625 48.65 23.7625 47.825L23.0125 47.955C22.5375 48.0425 21.9375 48.08 21.21 48.07C20.4517 48.056 19.6959 47.9799 18.95 47.8425C18.156 47.6959 17.4086 47.3616 16.77 46.8675C16.1012 46.3616 15.6024 45.664 15.34 44.8675L15.015 44.1175C14.7411 43.5259 14.3969 42.9694 13.99 42.46C13.525 41.8525 13.0525 41.4425 12.575 41.225L12.35 41.0625C12.1931 40.9501 12.0504 40.8192 11.925 40.6725C11.8052 40.5364 11.7066 40.383 11.6325 40.2175C11.5675 40.065 11.6225 39.94 11.795 39.8425C11.97 39.7425 12.2825 39.695 12.74 39.695L13.39 39.795C13.8225 39.88 14.36 40.14 14.9975 40.5725C15.6427 41.0123 16.1816 41.5905 16.575 42.265C17.075 43.1525 17.675 43.83 18.38 44.2975C19.085 44.7625 19.795 44.9975 20.51 44.9975C21.225 44.9975 21.8425 44.9425 22.365 44.835C22.8703 44.7305 23.3613 44.566 23.8275 44.345C24.0225 42.895 24.5525 41.775 25.42 40.995C24.2959 40.8848 23.1819 40.6892 22.0875 40.41C21.0195 40.1166 19.9923 39.6908 19.03 39.1425C18.0231 38.5943 17.1338 37.8536 16.4125 36.9625C15.72 36.095 15.15 34.9575 14.705 33.55C14.2625 32.14 14.04 30.5125 14.04 28.67C14.04 26.0475 14.895 23.815 16.6075 21.97C15.8075 20 15.8825 17.7875 16.835 15.34C17.465 15.1425 18.3975 15.29 19.6325 15.7775C20.8675 16.265 21.7725 16.6825 22.3475 17.0275C22.9225 17.3775 23.3825 17.67 23.73 17.9075C25.7624 17.3419 27.8628 17.0576 29.9725 17.0625C32.12 17.0625 34.2 17.345 36.2175 17.9075L37.4525 17.1275C38.4025 16.5571 39.4045 16.0783 40.445 15.6975C41.595 15.2625 42.47 15.145 43.08 15.34C44.055 17.79 44.14 20 43.3375 21.9725C45.05 23.815 45.9075 26.0475 45.9075 28.6725C45.9075 30.515 45.685 32.1475 45.24 33.565C44.7975 34.985 44.2225 36.1225 43.5175 36.98C42.7835 37.8597 41.8905 38.5933 40.885 39.1425C39.835 39.7275 38.815 40.15 37.8275 40.41C36.7332 40.6901 35.6191 40.8865 34.495 40.9975C35.62 41.9725 36.185 43.51 36.185 45.6125V53.3875C36.185 53.755 36.2375 54.0525 36.3475 54.28C36.3981 54.3896 36.4702 54.4879 36.5595 54.5691C36.6488 54.6503 36.7536 54.7126 36.8675 54.7525C37.1075 54.8375 37.3175 54.8925 37.5025 54.9125C37.6875 54.9375 37.9525 54.945 38.2975 54.945H45.5825C48.1625 54.945 50.3675 54.03 52.2 52.1975C54.03 50.3675 54.9475 48.16 54.9475 45.58V14.365C54.9475 11.785 54.0325 9.58 52.2 7.7475Z" fill="#FC3F04"/>
                    </svg>
                    <p>github.com/sawlew</p>
                  </a>
                </div>
              </div>
              <hr className='border-[#FC3F04] my-3 w-1/2 mx-auto sm:hidden' />
              <div className='sm:w-1/2'>
                <table className="table-fixed w-full sm:w-[70%] sm:ml-auto">
                  <tbody>
                    <tr>
                      <td>
                        <label htmlFor="name" className=''>Name</label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input type="text" name='name' placeholder='Name' className='h-10 w-full bg-transparent border border-[#FC3F04] text-[#FC3F04] px-[1rem] focus:outline-none focus:border-[#FC3F04] rounded-md' />
                      </td>
                    </tr>
                    
                    <tr>
                      <td className='pt-3'>
                        <label htmlFor="email" className=''>Email</label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input type="email" name='email' placeholder='Email' className='h-10 w-full bg-transparent border border-[#FC3F04] text-[#FC3F04] px-[1rem] focus:outline-none focus:border-[#FC3F04] rounded-md' />
                      </td>
                    </tr>
                    <tr>
                      <td className='pt-3'>
                        <label htmlFor="message" className=''>Message</label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <textarea type="text" name='message' placeholder='Message' className='h-40 max-h-48 w-full bg-transparent border border-[#FC3F04] text-[#FC3F04] px-[1rem] focus:outline-none focus:border-[#FC3F04] rounded-md' />
                      </td>
                    </tr>
                    <tr>
                      <td className='text-center sm:text-right'>
                        <button className='border border-[#FC3F04] py-1 px-6 mt-5 rounded-md text-[#FC3F04] hover:text-white hover:bg-[#FC3F04] ease-in duration-300'>
                          send
                        </button>
                      </td>
                    </tr>
                  </tbody>

                </table>
              </div>
            </div>
        </main>

    </div>
  )
}

export default Contact