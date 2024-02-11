import React,{ useState, useEffect } from 'react'
import Dropdown from './Dropdown'
import { Link } from 'react-router-dom'

const Home = () => {
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
    <div className='flex flex-col justify-between py-5 sm:py-12 px-3 sm:px-24' id='home' style={{ height: `${homeScreenHeight}px` }}>
        <header className='flex justify-between items-center'>
            <p className='font-bold text-lg select-none'>Abdullah</p>
            <nav className='hidden sm:flex  gap-40'>
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
            <p className='text-3xl sm:text-5xl'>Hi, I'm Abdullah Busari.</p>
            <div className='my-3 text-xl'>
                <p>A professional</p>
                <div className='h-[1.75rem] overflow-hidden'>
                    <ul className='text-[#FF5349] animate-text-slide-2 z-0'>
                        <li>Back-End Developer</li>
                        <li>Mobile Engineer</li>
                        <li>Cyber Security Analyst</li>
                    </ul>
                </div>

                <p>based in Lagos</p>
            </div>
            <Link to={"/contact"}>
                <button className='mt-5 flex justify-center items-center gap-2 hover:gap-5 border border-[#FC3F04] hover:bg-[#FC3F04] w-32 h-10  sm:text-sm text-[#FC3F04] hover:text-white rounded-md transition-all duration-300 ease-in'>
                    <p>Say Hello</p>
                    {/* <div className='w-10 rotate-[-90deg]'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352 216l-96 96-96-96"/>
                        </svg>
                    </div> */}
                    <span>❯</span>

                </button>
            </Link>

        </main>

        <footer className='gap-10 sm:flex sm:justify-between'>
            <div className='flex items-center gap-5'>
                <Link to={"/projects"} className='border-l-4 border-[#FC3F04] pl-2 hover:text-[#FC3F04] ease-in duration-300'>See my work</Link>
                <Link to={"/skills"} className='border-l-4 border-[#FC3F04] pl-2 hover:text-[#FC3F04] ease-in duration-300'>My skills</Link>
            </div>
            <div className='mt-10 sm:mt-0 flex items-center gap-5'>
                <a href="#" className='hover:scale-[1.5] ease-in duration-300'>
                    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.9415 9.96402C36.6627 10.5453 35.2843 10.9272 33.8561 11.1099C35.3175 10.2297 36.4468 8.83473 36.9783 7.1574C35.5999 7.98776 34.072 8.56901 32.4611 8.90116C31.1491 7.47294 29.3057 6.64258 27.2132 6.64258C23.3105 6.64258 20.122 9.83116 20.122 13.7671C20.122 14.3317 20.1884 14.8798 20.3046 15.3946C14.3925 15.0956 9.12799 12.2558 5.62387 7.95455C5.0094 9.0008 4.66065 10.2297 4.66065 11.5251C4.66065 13.9996 5.90619 16.1917 7.83263 17.4373C6.65352 17.4373 5.55744 17.1051 4.59422 16.6069C4.59422 16.6069 4.59422 16.6069 4.59422 16.6567C4.59422 20.111 7.05209 23.0007 10.3071 23.6484C9.70924 23.8144 9.07817 23.8975 8.43049 23.8975C7.98209 23.8975 7.5337 23.8476 7.10191 23.7646C7.9987 26.5712 10.606 28.6637 13.7448 28.7135C11.3201 30.64 8.24781 31.7693 4.89315 31.7693C4.32851 31.7693 3.76386 31.7361 3.19922 31.6696C6.35459 33.6957 10.1078 34.8748 14.1268 34.8748C27.2132 34.8748 34.4041 24.0137 34.4041 14.5974C34.4041 14.2819 34.4041 13.983 34.3875 13.6674C35.7825 12.671 36.9783 11.4088 37.9415 9.96402Z" fill="#FC3F04"/>
                    </svg>
                </a>
            
                <a href="#" className='hover:scale-[1.5] ease-in duration-300'>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.9998 3.38672C10.8658 3.38672 3.39258 10.8434 3.39258 20.0271C3.39258 28.3307 9.47081 35.2227 17.4091 36.4683V24.8432H13.1908V20.0271H17.4091V16.3569C17.4091 12.1885 19.8835 9.89674 23.6866 9.89674C25.4968 9.89674 27.39 10.2123 27.39 10.2123V14.3143H25.2975C23.2382 14.3143 22.5905 15.593 22.5905 16.905V20.0271H27.2073L26.46 24.8432H22.5905V36.4683C26.5039 35.8502 30.0674 33.8535 32.6377 30.8385C35.2081 27.8236 36.6159 23.989 36.607 20.0271C36.607 10.8434 29.1337 3.38672 19.9998 3.38672Z" fill="#FC3F04"/>
                    </svg>
                </a>

                <a href="#" className='hover:scale-[1.5] ease-in duration-300'>
                    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.4544 3.32227H27.4045C32.7188 3.32227 37.0367 7.64014 37.0367 12.9544V26.9045C37.0367 29.4591 36.0219 31.9091 34.2155 33.7155C32.4091 35.5219 29.9591 36.5367 27.4045 36.5367H13.4544C8.14014 36.5367 3.82227 32.2188 3.82227 26.9045V12.9544C3.82227 10.3998 4.83708 7.94985 6.64347 6.14347C8.44985 4.33708 10.8998 3.32227 13.4544 3.32227ZM13.1223 6.64371C11.5367 6.64371 10.016 7.27359 8.8948 8.3948C7.77359 9.516 7.14371 11.0367 7.14371 12.6223V27.2366C7.14371 30.5415 9.81747 33.2152 13.1223 33.2152H27.7366C29.3223 33.2152 30.8429 32.5853 31.9641 31.4641C33.0853 30.3429 33.7152 28.8223 33.7152 27.2366V12.6223C33.7152 9.31747 31.0415 6.64371 27.7366 6.64371H13.1223ZM29.1482 9.13479C29.6988 9.13479 30.2268 9.3535 30.6161 9.7428C31.0054 10.1321 31.2241 10.6601 31.2241 11.2107C31.2241 11.7612 31.0054 12.2893 30.6161 12.6786C30.2268 13.0679 29.6988 13.2866 29.1482 13.2866C28.5977 13.2866 28.0697 13.0679 27.6804 12.6786C27.2911 12.2893 27.0723 11.7612 27.0723 11.2107C27.0723 10.6601 27.2911 10.1321 27.6804 9.7428C28.0697 9.3535 28.5977 9.13479 29.1482 9.13479ZM20.4295 11.6259C22.6317 11.6259 24.7438 12.5007 26.301 14.0579C27.8582 15.6152 28.7331 17.7272 28.7331 19.9295C28.7331 22.1317 27.8582 24.2438 26.301 25.801C24.7438 27.3582 22.6317 28.2331 20.4295 28.2331C18.2272 28.2331 16.1152 27.3582 14.5579 25.801C13.0007 24.2438 12.1259 22.1317 12.1259 19.9295C12.1259 17.7272 13.0007 15.6152 14.5579 14.0579C16.1152 12.5007 18.2272 11.6259 20.4295 11.6259ZM20.4295 14.9473C19.1081 14.9473 17.8409 15.4722 16.9065 16.4065C15.9722 17.3409 15.4473 18.6081 15.4473 19.9295C15.4473 21.2508 15.9722 22.5181 16.9065 23.4524C17.8409 24.3867 19.1081 24.9116 20.4295 24.9116C21.7508 24.9116 23.0181 24.3867 23.9524 23.4524C24.8867 22.5181 25.4116 21.2508 25.4116 19.9295C25.4116 18.6081 24.8867 17.3409 23.9524 16.4065C23.0181 15.4722 21.7508 14.9473 20.4295 14.9473Z" fill="#FC3F04"/>
                    </svg>
                </a>
            </div>
        </footer>
    </div>
  )
}

export default Home