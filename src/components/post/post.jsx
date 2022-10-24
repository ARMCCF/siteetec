import React from 'react';

const Post = () =>{

    return(
        <div className=' place-content-center block p-6 max-w-sm bg-[yellow] rounded-lg border border-gray-200 shadow-md hover:bg-yellow-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
        <div path='/post'>
        <form className='p-8' action="/home" method="POST" enctype="multipart/form-data">
                <input className='p-3 ' type="text" name="caption" placeholder="Descrição"/>
                <input className='py-4' type="file" name="image" accept="image/*"/>
                <button className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700' type="submit">Enviar</button>
                
        </form>
        </div>
        </div>

    )
}

export default Post