import React from 'react'

export default function PopUp({data,close, index}) {
    // console.log(data[index]);
    
  return (
    <div className='w-full h-auto max-h-screen overflow-y-scroll absolute top-0 bg-opacity-80 border-tin bg-white backdrop-blur-md p-5 flex items-center justify-center'>
        <div className='absolute top-10 right-10 w-7 h-7 flex justify-center items-center rounded-full border-2 border-black transform hover:scale-125 hover:shadow-lg duration-500'>
            <button onClick={close}>
                <span className=''>&times;</span>
            </button>
        </div >
        
        {data && <div className='w-full h-auto mt-14'>
            <h1 className='text-lg font-semibold mb-1'>
                Title
            </h1>
            <p className=' text-sm leading-6 '>
                {data[index].title}
            </p>
            <h1 className='text-lg font-semibold mb-1'>
                Author
            </h1>
            <p className=' text-sm leading-6 '>
                {data[index].author}
            </p>
            <h1 className='text-lg font-semibold mb-1'>
                Abstract
            </h1>
            <p>
                {data[index].abstract}
            </p>
        </div>}

        {!data && <div className='w-8 lg:w-16 h-8 lg:h-16 border-indigo-500 border-r-indigo-100 border-8 rounded-full animate-spin' />}
        
    </div>
  )
}
