import React from "react";
import Card from "./card";
import Arrow from '../assets/seila.svg'
const Vest = () => {
    return (
        <div className='bg-white pt-14'>

            <h1 className='md:text-6xl font-medium mt-3 text-center pb-10'>Nossos Cursos</h1>
            <div className=' grid  md:grid-rows-4 lg:grid-cols-4  '>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </div>
        </div>
    )
}

export default Vest