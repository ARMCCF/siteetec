import React from "react";

const Card = () => {
    return (
       
            <div className='max-w-[800px] mt[-96px] w-full h-screen mx-auto text-centter flex flex-col justify-center select-none items-center min-h-screen container bg-white'>

<div className='grid grid-colls-1 md:grid-cols-2 lg:grid-cols-3'>

    <div className='rounded-xl shadow-lg'>
        <div className='p-5 flex flex-col'>
            <div className='rounded-xl overflow-hidden'>
               <img src="https://64.media.tumblr.com/e4d558ac26719adda97e300de10d8054/e01680064fd284dd-a4/s1280x1920/c11e18c0c150a3213634e80ab3f624dbc60e3f88.jpg" alt="/" /> 
            </div>
            <h5 className='  first-letter:text-2xl md:text-2xl font-medium mt-3'>BRIGADEIRO RAPAZIADAAAAAA</h5>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aspernatur, vero rem voluptatem a non, perferendis debitis laborum tempora ad consectetur recusandae? Ex perferendis ipsam qui facere earum consectetur sequi!</p>
        </div>

    </div>

</div>



</div>
        
    )
}


export default Card