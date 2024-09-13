import React, { useState } from 'react';
import avatar from "../../public/profile/avatar.png"
import { useSelector } from 'react-redux';
import axios from 'axios';


export default function PopPics({close}) {
    const [looading, setLooading] = useState(false)
    const {currentUser} = useSelector((state) => state.user);
    
    const [image, setImage] = useState(null)
    const id = currentUser._id;

    const handleUpdate = async (e)=>{
        e.preventDefault()
        try {
            const formdata = new FormData()
            formdata.append("file", image)
            // console.log(id,currentUser);
            
            axios.post(`http://localhost:4000/api/v1/user/${id}/uploadImg`, formdata,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            ).then((res)=>{
                // console.log(res)
                alert(res.data.message)

            })

        } catch (error) {
            console.log(error);
            
        }
    }

  return (
    <div className='w-full h-auto py-10 absolute bg-white flex flex-col justify-center items-center z-40 shadow-2xl'>
        <div className='w-32 h-32 bg-white rounded-full mx-auto mt-6 relative'>
            <img src={ avatar} />  
        </div>
        <i className='bx bx-x-circle text-3xl cursor-pointer absolute top-6 right-6' onClick={close}></i>
        <div className='my-10 flex flex-col justify-between items-center' >
            <input type="file" className='border-tin shadow-lg' onChange={(e)=>{setImage(e.target.files[0])}} />

            <button disabled={looading} onClick={handleUpdate} type='submit' className='px-3 py-2 bg-indigo-500 text-sm font-semibold mt-5 w-1/3 shadow-lg text-white flex items-center justify-center'>
                {looading ? <div className='w-6 h-6 border-2 border-white border-r-indigo-400 animate-spin rounded-full' /> : "update"}
            </button>
        </div>
    </div>
  )
}