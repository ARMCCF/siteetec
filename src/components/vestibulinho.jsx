import React from "react";
import Cursos from "./cards/cards";

const Vest = () => {
    return (
        <section id='cursos'>
        <div className='bg-[#1C253A] '>

            <h1 className='md:text-6xl font-medium mt-2 text-center pb-3 py-20 text-white shadow-ml'>Nossos Cursos</h1>
            <div className=''>
              <Cursos/>  

            </div>
            
        </div>
        </section>
    )
}

export default Vest