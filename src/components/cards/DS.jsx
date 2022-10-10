import React from "react";
import Computador from './assets/computador.svg'
const Card = () => {
    return (
       
            <div className=''>

<div className='ml-7 my-7 '>
        
    <div className='rounded-xl shadow-lg  bg-white'>
        
        <div className='p-4 flex flex-col'>

            <div className='rounded-xl overflow-hidden'>
                
               <img src={Computador} alt="/" /> 
            </div>

            <h5 className=' md:text-2xl font-medium mt-3 '>Desenvolvimento de Sistemas</h5>

            <p>O curso de Desenvolvimento de Sistemas é voltado para a criação e entendimento de novas tecnologias hoje presentes em computadores e Smartphones.</p>
        </div>

    </div>

</div>



</div>
        
    )
}


export default Card