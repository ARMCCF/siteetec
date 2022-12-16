import React from 'react';
import {useState} from 'react'
import Axios from 'axios'
const Post = () =>{

    const [imageSelected, setImageSelected] = useState("")

    const uploadImage = () =>{
        const formData = new FormData();
        formData.append("file", imageSelected);
        formData.append("upload_preset", "ml9low5q");
        
        Axios.post("https://api.cloudinary.com/v1_1/armandofilhocompany/image/upload", formData)
        .then((response)=>{
            console.log(response)}, 
           
            res => setImageSelected(res.data.secure_url), 
        
    )};

    return(
        <div className=' place-content-center block p-6 max-w-sm bg-[yellow] rounded-lg border border-gray-200 shadow-md hover:bg-yellow-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
        <div path='/post'>
                <input className='py-4' type="file" name="image" 
                onChange={(event)=>{
                    setImageSelected(event.target.files[0])
                }}/>

                <button className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700' type="submit" onClick={uploadImage}>Enviar</button>
                
                <img alt='' src={imageSelected} />
       </div>
       </div>

    )
}

export default Post