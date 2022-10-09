import React from "react";
import { useState } from "react";
import eteclogo from "../assets/eteclogo.png"
import { AiOutlineMenu, AiOutlineClose, } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    


    const handleNav = () => {
        setNav(!nav);
    };
    return (
        <div className='flex bg-[#f8f6f6] justify-between items-center h-22  px-4 text-white select-none sticky top-0 z-50'>
            <img className='w-48' alt='Logo' src={eteclogo}/>
            <ul className='hidden md:flex '>
                <li className='p-4 text-[black]'>Home</li>
                <li className='p-4 text-[black]'>Cursos</li>
                <li className='p-4 text-[black]'>Sobre</li>
                <li className='p-4 text-[black]'>Secretaria</li>
                <li className='p-4 text-[black]'>Contato</li>
                <li className='p-4 text-[black]' onClick={event =>  window.location.href='https://www.vestibulinhoetec.com.br/'}>Vestibulinho</li>
                <li className='p-4 px-6 py-4 bg-black  text-[white]' onClick={event =>  window.location.href='https://nsa.cps.sp.gov.br/ '}>NSA</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineMenu color='black' size='28'/> : <AiOutlineClose color='black' size='28'/>}
            </div>
            <div className={!nav ? 'fixed left-[-100%] ease-out duration-300 bg-[#f8f6f6] ' : 'fixed left-0 top-0 w-[60%] ease-in-out duration-300 bg-[#f8f6f6]'  }>
            <img className='w-40 mt-12' alt='Logo' src={eteclogo}/>
                <ul className='pt-24 uppercase'>
                <li className='p-4 text-[black]'>Home</li>
                <li className='p-4 text-[black]'>Cursos</li>
                <li className='p-4 text-[black]'>Sobre</li>
                <li className='p-4 text-[black]'>Secretaria</li>
                <li className='p-4 text-[black]'>Contato</li>
                <li className='p-4 text-[black]' onClick={event =>  window.location.href='https://www.vestibulinhoetec.com.br/'}>Vestibulinho</li>
                <li className='p-4 px-6 py-4 bg-black items-center text-[white]' onClick={event =>  window.location.href='https://nsa.cps.sp.gov.br/'}>NSA</li>
                </ul>
            </div>
        </div>
    )
        

}

export default Navbar