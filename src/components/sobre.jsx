import React from 'react';

const Sobre = () => {
    return (
        <section id='sobre'>
        <div  className="bg-no-repeat bg-cover" style={{ backgroundImage: `url(${"https://lh5.googleusercontent.com/p/AF1QipM2eUzi72THNOMafQiOEr0U7fpYjyu49W0oQjlG=w462-h260-k-no"})`}}>
        <div className='text-black filter bg-fixed backdrop-blur-sm ' >
            
            
            <div  className='opacity-80 bg-white shadow-lg rounded-xl overflow-hidden order-5 lg:order-none max-w-[100%]  mt[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center select-none'>
            <div>
            <p className='opacity-100 brightness-50 text-center font-bold tracking-tight font-mono align-[32px] p-2 md:text-2xl sm:text-3xl text-3xl md:py-6 '>Sobre</p>
            <p className='text-center md:text-3xl sm:text-6xl text-4xl md:py-6'> A Escola Técnica Estadual Paulistano foi criada em 22 de dezembro de 2009 (DECRETO Nº 55.223) através do Plano Estadual de Expansão do Governo de São Paulo em parceria com o Centro Paula Souza, tendo suas atividades iniciadas em 22 de fevereiro de 2010 atendendo à centenas de alunos distribuídos pelos cursos oferecidos. </p>
            </div>
            </div>
        </div>
        </div>
        </section>
    )
}

export default Sobre;