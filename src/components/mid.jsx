import React from 'react';
import Panoramica from '../assets/etecpanoramica.jpg';
const Mid = () => {
    return (
        <div style={{ backgroundImage: `url(${Panoramica})`}}>
        <div className='text-black filter bg-fixed backdrop-blur-sm' >
            
            
            <div  className='max-w-[800px] mt[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center select-none'>
            <div>
            <h1 className='text-center font-bold tracking-tight font-mono align-[48px] p-2 md:text-8xl sm:text-8xl text-4xl md:py-6 '>ETEC Paulistano</h1>
            <p className='text-center md:text-3xl sm:text-6xl text-4xl md:py-6'>Escola Tecnica Estadual Paulistano</p>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Mid;