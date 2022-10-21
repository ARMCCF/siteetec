import React from "react";
import Cursos from "./cards/cards";

const Vest = () => {
    return (
        <div className='bg-[#1C253A] '>

            <h1 className='md:text-6xl font-medium mt-3 text-center pb-10 py-10 text-white shadow-ml'>Nossos Cursos</h1>
            <div className=''>
              <Cursos/>  

            </div>
            
        </div>
    )
}

export default Vest