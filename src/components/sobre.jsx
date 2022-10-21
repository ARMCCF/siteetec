import React from 'react';

const Sobre = () => {
    return (
        <div  className="bg-no-repeat bg-cover" style={{ backgroundImage: `url(${"https://lh5.googleusercontent.com/p/AF1QipM2eUzi72THNOMafQiOEr0U7fpYjyu49W0oQjlG=w462-h260-k-no"})`}}>
        <div className='text-black filter bg-fixed backdrop-blur-sm ' >
            
            
            <div  className='opacity-80 bg-white shadow-lg rounded-xl overflow-hidden order-5 lg:order-none max-w-[1280px]  mt[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center select-none'>
            <div>
            <h1 className='opacity-100 brightness-50 text-center font-bold tracking-tight font-mono align-[48px] p-2 md:text-8xl sm:text-8xl text-4xl md:py-6 '>Sobre</h1>
            <p className='text-center md:text-3xl sm:text-6xl text-4xl md:py-6'>A Escola Técnica Paulistano foi fundada no ano de 2010,</p>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Sobre;