import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

const Dropdown = () => {

    useEffect(() => {
        const dropDown = document.getElementById("drop-down");
        const close = document.getElementById("close");
        const menu = document.getElementById("menu");

        const openMenu = () => {
            dropDown.classList.remove("ml-[-100%]");
        }

        const closeMenu = () => {
            dropDown.classList.add("ml-[-100%]");
        }

        menu.addEventListener('click', openMenu);
        close.addEventListener('click', closeMenu);
    })

  return (
    <>
            <div id='drop-down' className='z-50 absolute sm:hidden w-full h-screen top-0 left-0 p-10 bg-[#000000e0] ml-[-100%] ease-linear duration-200'>
                <div className='flex justify-between items-center'>
                    <p className='font-bold text-lg select-none'>Abdullah</p>
                    <svg xmlns="http://www.w3.org/2000/svg" id="close" className="w-10 text-3xl cursor-pointer" viewBox="0 0 512 512">
                        <path stroke='currentColor' fill='currentColor' d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
                    </svg>
                </div>
                <div className='flex flex-col items-center gap-10 font-semibold w-1/2 mt-10 mx-auto'>
                    <Link to={"/"}>HOME</Link>
                    <Link to={"/about"}>ABOUT</Link>
                    <Link to={"/contact"}>CONTACT</Link>
                    <Link to={"/projects"}>PROJECTS</Link>
                    <Link to={"/skills"}>SKILLS</Link>
                </div>
            </div>
    </>
  )
}

export default Dropdown