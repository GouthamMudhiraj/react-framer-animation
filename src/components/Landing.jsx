import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import {motion} from "framer-motion";


const Landing = () => {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className=' h-screen w-full  pt-1'>
        <div className='textStructure mt-52 px-20'>
            {['We Create','Eye Opening','Presentations'].map((item,index)=>{
                return  <div className='marker overflow-hidden'>
                    <div className=' w-fit flex items-center justify-center'>
                        {index === 1 && (<motion.div initial={{width:0}} animate={{width:"8vw"}} transition={{ease:[0.76, 0, 0.24, 1],duration:2}} className='mr-[1vw] rounded-md w-[8vw] h-[5.7vw] relative -top-[1px]  '> 
                            <img className='w-full h-full rounded-xl object-cover' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" /> </motion.div>)}
                <h1 className='uppercase text-[7vw] font-extrabold leading-[7.5vw] tracking-tighter '>{item}</h1>
                </div>
                </div>
            })}
           
      
    </div>
    <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
       {["for private and public companies","From the first IPO"].map((item,index)=><p className='text-md tracking-tight font-light leading-none'>{item}</p>)} 
       <div className='start flex gap-10 items-center justify-between'>
        <div className='px-5 py-2 border-[2px] border-zinc-400 font-light text-sm capitalize rounded-full '>
            start the project

        </div>
        <div className='w-10 h-10 flex items-center justify-center border-[2px] border-zinc-400 rounded-full'>
            <span className='rotate-[45deg]'>
                <FaArrowUpLong />
                </span>

        </div>
    </div>
    </div>
    
    </div>
  )
}

export default Landing
