import React from "react";
import DS from "./cards/DS";
import Meioambiente from "./cards/Meioambiente"

const Vest = () => {
    return (
        <div className='bg-[#1C253A] py-10'>

            <h1 className='md:text-6xl font-medium mt-3 text-center pb-10  '>Nossos Cursos</h1>
            <div className=' p-10  grid  md:grid-row lg:grid-cols-4  '>
            <DS className='transition duration-150' />
            <Meioambiente />

            </div>
        </div>
    )
}

export default Vest