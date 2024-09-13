import React, { useEffect, useState } from 'react'
import {useSelector} from "react-redux"
import axios from "axios"

export default function Upload() {
  // const {currentUser} = useSelector((state)=>{state.user});
  const { currentUser} = useSelector((state) => state.user);
  const id = currentUser._id;
  const [loading, setLoading] = useState(false)

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [abstract, setAbstract] = useState('')
  const [uploadedBy, setUploadedBy] = useState('')
  const [file, setFile] = useState(null)


  const handleSubmit = async (e)=>{
    e.preventDefault()
    setUploadedBy(currentUser.username);

    const formData = new FormData();
    formData.append('title', title)
    formData.append('author', author)
    formData.append('abstract', abstract)
    formData.append('uploadedBy', uploadedBy)
    formData.append('file', file);
    const link= `http://localhost:4000/api/v1/user/${id}/uploadDoc`;

    try {
      setLoading(true)
      // console.log(uploadedBy);
      
      await axios.post( link, formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )
      .then((res)=>{
        if (res.status === 200) {
          alert(res.data.message)
          
          setLoading(false)
        }
      })
    } catch (error) {
      console.log(error);
      setLoading(false)
      
    }
    
    // console.log(formData);
    
  }
  return (
    <div>
      <h1 className='font-bold text-3xl text-indigo-600 text-center mb-3'>
        Upload A Project
      </h1>
        <div className='w-11/12 md:w-2/3 lg:w-2/3 h-auto px-5 lg:px-10 mx-auto border-2 rounded-lg shadow-xl'>
            <div className='flex flex-col my-2'>
                <label htmlFor="title" className='text-indigo-500 font-medium'>Title</label>
                <input onChange={(e)=>{setTitle(e.target.value)}} className='border-tin rounded-md shadow-lg text-sm lg-text-base' type="text" required placeholder='Enter project title here' name="title" id="title" />
            </div>
            <div className='flex flex-col my-2'>
                <label htmlFor="author" className='text-indigo-500 font-medium'>Author</label>
                <input onChange={(e)=>{setAuthor(e.target.value)}} className='border-tin rounded-md shadow-lg text-sm lg-text-base' type="text" required placeholder='Enter project Author here' name="author" id="author" />
            </div>
            <div className='flex flex-col my-2'>
                <label htmlFor="abstract" className='text-indigo-500 font-medium'>Abstract</label>
                <textarea onChange={(e)=>{setAbstract(e.target.value)}} className='border-tin rounded-md shadow-lg text-sm lg-text-base' name='abstract' required cols="20" rows="5"></textarea>
                {/* <input type="text" placeholder='Enter project Author here' name="author" id="author" /> */}
            </div>
            <div className='flex flex-col my-2'>
                <label htmlFor="file" className='text-indigo-500 font-medium'>Select File for upload</label>
                <input onChange={(e)=>{setFile(e.target.files[0])}} className='border-tin rounded-md shadow-lg text-sm lg-text-base' type="file"required/>
            </div>
            <button onClick={handleSubmit} className='w-1/2 lg:w-1/3 flex justify-center items-center bg-indigo-500 hover:bg-indigo-800 text-white p-2 px-5 rounded-md my-4 mx-auto' disabled={loading}>
              { loading ? <div className='w-6 h-6 border-2 border-white border-r-indigo-400 animate-spin rounded-full'/> : "Upload"}
            </button>
        </div>
    
    </div>
  )
}
