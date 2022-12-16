import React from 'react';


const Sobre = () => {
    return (
        <section id='contato'>
        <div  className="bg-no-repeat bg-cover" style={{ backgroundImage: `url(${"https://lh5.googleusercontent.com/p/AF1QipM2eUzi72THNOMafQiOEr0U7fpYjyu49W0oQjlG=w462-h260-k-no"})`}}>
        <div className='text-black filter bg-fixed backdrop-blur-sm ' >
            
            
            <div  className='py-16 opacity-80 bg-white shadow-lg rounded-xl overflow-hidden order-5 lg:order-none max-w-[100%]  mt[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center select-none'>
            <div className='items-center'>
            <p className='text-center md:text-3xl sm:text-6xl text-4xl md:py-6'> Telefone:(11) 3979-1061</p>
            <p className='text-center md:text-3xl sm:text-6xl text-4xl md:py-6'> EMAIL: contato@etecpaulistano.com.br</p>
            <p className='text-center md:text-3xl sm:text-6xl text-4xl md:py-6'> Endereço: Avenida Elísio Teixeira Leite, 3611 02810-000 São Paulo, SP</p>
            
            </div>
            </div>
        </div>
        </div>
        </section>
    )
}

export default Sobre;