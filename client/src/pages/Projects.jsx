import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PopUp from '../Components/PopUp';
// import { FaFileAlt, FaUpload, FaChevronRight } from 'react-icons/fa';

const Project = () => {
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
      // console.log(filee);

    })
  }, [])


  // const [papers, setPapers] = useState([
  //   { id: 1, title: 'AI in Healthcare', abstract: 'This paper explores...', result: 'We found that...', conclusion: 'In conclusion...' },
  //   { id: 2, title: 'Quantum Computing Advances', abstract: 'Recent developments in...', result: 'Our experiments show...', conclusion: 'These findings suggest...' },
  //   { id: 3, title: 'Machine Learning in Finance', abstract: 'This project provided...', result: 'With the success of the project...', conclusion: 'These findings suggest...' },
  // ]);

  // const [selectedPaper, setSelectedPaper] = useState(null);

  // const handlePaperClick = (paper) => {
  //   setSelectedPaper(paper);
  // };

  // const handleUpload = () => {
  //   // Implement upload functionality
  //   console.log('Upload clicked');
  // };

  // const handleViewMore = (id) => {
  //   // Implement view more functionality
  //   console.log('View more clicked for paper with id:', id);
  //   // You can add navigation to a detailed view or expand the current view
  // };

  return (
    <div className="w-full min-h-screen bg-gradient-to-tr from-white to-gray-300 mx-auto py-8 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-shadow-3d font-sans text-white stroke-black stroke-width-2">Project Papers</h1>
        <p className="text-lg text-gray-600 mt-2 shadow-xl rounded-2xl">Browse and manage your research documents</p>
      </div>
      <div className='relative'>
      <div className="flex flex-row bg-indigo-600 text-white p-2 mt-2">
          <p className='w-1/12'>#</p>  
          <p className='w-7/12'>Book Title </p>  
          <p className='w-5/12'>Author </p>  
          <p className='w-4/12 hidden lg:block ml-3'>Uploaded by </p>  
          {/* <p className='w-1/12'> </p> */}
        </div> 
        {filee === null ? <div className='w-6 h-6 border-2 border-white border-r-indigo-400 animate-spin rounded-full'/>  : 
          filee.map((file, index) => {
            // console.log(file, index); 
          return (
            <div 
            key={index} 
            className="flex flex-row odd:bg-indigo-50 p-2 hover:bg-indigo-500 hover:text-white duration-700 cursor-default" 
            onClick={()=>{
              setIndex(index); setPopup(true)}}>
              <p className='w-1/12'>{index+1}.</p>  
              <p className='w-7/12'>{file.title} </p>  
              <p className='w-5/12'>{file.author} </p>  
              <p className='w-4/12 hidden lg:block ml-3'>{file.uploadedBy} </p>  
              {/* <p className='w-1/12 mr-2'><i className='bx bxs-download bg-indigo-600 p-2 rounded-full text-white hover:shadow-white hover:shadow-md duration-700 delay-75 cursor-pointer'></i></p> */}
            </div>
          )          
        })}
        {popup && <PopUp index={index} data={filee} close={closePop}/>}
      </div>
    </div>
  );
};

export default Project;
