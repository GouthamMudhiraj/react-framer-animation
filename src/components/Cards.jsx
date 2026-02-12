import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen  flex items-center px-30 gap-5'>
        <div className='cardcontainer w-1/2 h-[50vh]'>
            <div className='card relative rounded-2xl flex items-center justify-center w-full h-full bg-[#004D43]'>
                <img className='object-cover' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='text-amber-50 absolute px-5 py-1 border-2 left-10 bottom-10 rounded-full'>&copy; 2026</button>
            </div>

        </div>
        <div className='cardcontainer w-1/2 h-[50vh] flex gap-5'>
            <div className='card relative  flex items-center justify-center w-1/2 rounded-2xl h-full bg-[#09100f]'>
            <img className='object-cover' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='text-amber-50 absolute px-5 py-1 border-2 left-10 bottom-10 rounded-full'>&copy; 2026</button>
            </div>
            <div className='card w-1/2 relative rounded-2xl flex items-center justify-center h-full bg-[#09100f]'>
            <img className='object-cover' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='text-amber-50 absolute px-5 py-1 border-2 left-10 bottom-10 rounded-full'>&copy; 2026</button>
            </div>

        </div>

      
    </div>
  )
}

export default Cards
