import React from 'react'

const About = () => {
  return (
    <div className='w-full p-20 rounded-tl-3xl rounded-tr-3xl bg-[#CDEA68]'>
       <h1 className=' text-[3vw] leading-[3.5vw] tracking-tight'>We craft category-defining presentations, brand identities, and digital experiences that drive funding, sales, and market leadership.</h1> 
       <div className='flex gap-5 w-full border-t-[1px] mt-20 pt-10 border-[#809049]'>
        <div className='w-1/2 '>
        <h1 className='text-7xl'>Our Approach</h1>
        <button className=' uppercase flex gap-10 items-center px-10 mt-10 py-6 bg-zinc-900 rounded-full text-white'>Read More
            <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
        </button>
        </div>
        <div className='w-1/2 overflow-hidden rounded-3xl h-[55vh] bg-[#CDEA68]'>
        <img className=' object-fill' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
        </div>
        

       </div>
      
    </div>
  )
}

export default About
