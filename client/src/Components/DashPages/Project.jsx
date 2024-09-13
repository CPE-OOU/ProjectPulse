import React, { useEffect, useState } from 'react'
import {useSelector} from "react-redux";
import PopUp from '../PopUp';
import axios from 'axios';

export default function Project() {
  const {loading, error, currentUser} = useSelector((state) => state.user);
  const [popup, setPopup] = useState(false)
  const [filee, setFilee] = useState(null)
  const [index, setIndex] = useState(0)
  const closePop = ()=>{
    setPopup(false)
  }

  useEffect(() => {
    axios.get('http://localhost:4000/api/v1/user/getDocs')
    .then((res)=>{
      setFilee(res.data.data.docs)

    })
  }, [])


  // const files = [
  //   {
  //     id: 1,
  //     name: "Ai in Computer Engineering",
  //     author: "Prof. Musa Ramoni",
  //     uploaded: "Aotrace",
  //   },
  //   {
  //     id: 2,
  //     name: "Ai in Computer Engineering",
  //     author: "Prof. Musa Ramoni",
  //     uploaded: "Aotrace",
  //   },
  //   {
  //     id: 3,
  //     name: "Ai in Computer Engineering",
  //     author: "Prof. Musa Ramoni",
  //     uploaded: "Aotrace",
  //   },
  //   {
  //     id: 4,
  //     name: "Ai in Computer Engineering",
  //     author: "Prof. Musa Ramoni",
  //     uploaded: "Aotrace",
  //   }
  // ];

  return (
    <>
      <div className='relative'>
        <h1 className='font-semibold mt-5 lg:mt-0 text-lg md:text-xl lg:text-3xl text-indigo-600'>Welcome back {currentUser.username} !</h1>
        <p className="text-center mt-2 text-lg font-normal text-indigo-600">List of Uploaded Projects</p>
        <div className="flex flex-row bg-indigo-600 text-white p-2 mt-2">
          <p className='w-1/12'>#</p>  
          <p className='w-7/12'>Book Title </p>  
          <p className='w-5/12'>Author </p>  
          <p className='w-4/12 hidden lg:block'>Uploaded by </p>  
          <p className='w-1/12'> </p>
        </div> 
        {filee === null ? <div className='w-6 h-6 border-2 border-white border-r-indigo-400 animate-spin rounded-full'/>  : 
          filee.map((file, index) => {
            // console.log(file, index); 
          return (
            <div 
            key={index} 
            className="flex flex-row odd:bg-indigo-50 p-2 hover:bg-indigo-500 hover:text-white duration-700 cursor-default" 
            onClick={()=>{setIndex(index); setPopup(true)}}>
              <p className='w-1/12'>{index+1}.</p>  
              <p className='w-7/12'>{file.title} </p>  
              <p className='w-5/12'>{file.author} </p>  
              <p className='w-4/12 hidden lg:block'>{file.uploadedBy} </p>  
              <button><a download={file.fileName} href={file.fileName} className='w-1/12 mr-2 p-2 z-50'><i className='bx bxs-download bg-indigo-600 p-2 rounded-full text-white hover:shadow-white hover:shadow-md duration-700 delay-75 cursor-pointer'></i></a></button>
            </div>
          )          
        })}
        {popup && <PopUp index={index} data={filee} close={closePop}/>}
      </div>
    </>
  )
}
