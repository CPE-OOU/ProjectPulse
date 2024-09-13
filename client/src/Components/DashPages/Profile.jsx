import React, { useEffect, useState } from 'react'
import { useSelector} from "react-redux";
// import { logout } from '../../app/user/user.js';
import avatar from "/profile/avatar.png"
import PopPics from '../PopPics';
import axios from 'axios';
// import axios from 'axios';


export default function Profile() {
  const {loading, error, currentUser} = useSelector((state) => state.user);
  // const [profilePics, setProfilePics] = useState(avatar);
  const [poPics, setPopPics] = useState(false);
  const [files, setFiles] = useState([]);
  // const [image, setImage] = useState([]);

  // useEffect(()=>{
  //   axios.get(`http://localhost:4000/api/v1/user/${currentUser._id}/getImage`)
  //   .then((res)=>{
  //     console.log(res.data.data.user);
  //     setImage(res.data.data.user)
  //   })
  // },[])

  // const files = [
  //   {
  //     id: 1,
  //     name: "Ai in Computer Engineering",
  //     author: "Prof. Musa Ramoni",
  //     uploaded: "You",
  //   },
  //   {
  //     id: 2,
  //     name: "Ai in Computer Engineering",
  //     author: "Prof. Musa Ramoni",
  //     uploaded: "You",
  //   },
  //   {
  //     id: 3,
  //     name: "Ai in Computer Engineering",
  //     author: "Prof. Musa Ramoni",
  //     uploaded: "You",
  //   },
  //   {
  //     id: 4,
  //     name: "Ai in Computer Engineering",
  //     author: "Prof. Musa Ramoni",
  //     uploaded: "You",
  //   }
  // ]

  useEffect(()=>{
    axios.get('http://localhost:4000/api/v1/user/getDocs')
    .then((res)=>{
      const data = res.data.data.docs;
      const latestData =data.reverse();
      setFiles(latestData);
      // console.log(latestData);


    })
  },[])

  return (
    <div className="w-full min-h-screen relative">
      {poPics && <PopPics close={() => setPopPics(false)} />}
      {/* <h1 className='font-bold mt-5 lg:mt-0 text-lg md:text-xl lg:text-3xl text-indigo-600'> */}
        {/* Welcome back {currentUser.username} !</h1>  */}
        <div className='w-full h-full flex flex-col lg:flex-row items-center justify-between'>
          <div className='w-full h-full lg-w-1/2 mx-auto lg:mx-0'>
            <div className='w-32 h-32 bg-white rounded-full mx-auto mt-6 relative'>
              {/* {
                image.map((single)=>{
                  const base64String = btoa(
                    String.fromCharCode(...new Uint8Array(single.data.data))
                  );
                  return <img src={`data:image/png;base64,${base64String}`} />
                })
              } */}
              <img  src={avatar} alt='profile pics'/>  
              <div className='w-7 h-7 rounded-full shadow-lg border-2 border-black flex items-center justify-center absolute -bottom-1 -right-3 cursor-pointer' onClick={()=>setPopPics(true)}>
                <i className='bx bx-edit-alt'></i>
              </div>
            </div>
            <h1 className='font-bold mt-3 lg:mt-2 text-lg md:text-xl lg:text-3xl text-indigo-600 text-center'>
              {currentUser.username}
            </h1>
            <p className='text-center text-base font-normal'>{currentUser.type}</p>
            {/* <button className='flex items-center justify-center border-2 border-indigo-600 px-3 py-2 rounded-md mt-6 mx-auto text-indigo-600'>
            <i className='bx bxs-cloud-upload'></i><span className='ml-2'>Upload a flie</span>
            </button> */}
            {/* <h1 className='font-medium tet-sm text-indigo-600 my-3 mt-5'>About</h1> */}
            {/* <p className='lg:w-4/5 text-xs leading-5 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel id dignissimos magnam aliquam qui temporibus rerum aspernatur illum, beatae voluptas hic quisquam accusantium possimus culpa cum porro officia esse optio.</p> */}
          </div>
          <div className='w-full h-full lg-w-1/2 mx-auto lg:mx-0'>
            <h1 className='font-normal mt-5 text-base md:text-xl lg:text-2xl text-indigo-600 text-center'>Latest Projects Uploaded on the Repo</h1>
            <div className='mt-4 h-auto mb-10'>
              <div className=' bg-indigo-600 text-white p-3 flex text-sm font-semibold'>
                <p className='w-1/12'>#</p>
                <p className='w-5/12'>Title</p>
                <p className='w-4/12'>Author</p>
                <p>Uploaded by</p>
              </div>
              {files.map((file, index) => {
                return(
                  <div key={index} className=" odd:bg-indigo-100 p-3 flex text-sm">
                    <p className='w-1/12'>{index+1}.</p>
                    <p className='w-5/12'>{file.title}</p>
                    <p className='w-4/12'>{file.author}</p>
                    <p>{file.uploadedBy === currentUser.username ? 'You' : file.uploadedBy }</p>
                  </div>)
              })}              
            </div>
          </div>
        </div> 
    </div>
  )
}
