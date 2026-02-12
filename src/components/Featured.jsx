import React, { useState } from 'react'
import { motion } from "framer-motion";

const Featured = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className='w-full py-20 '>
      
      {/* Heading */}
      <div className='w-full px-20 border-b-[1px] pb-20'>
        <h1 className='text-7xl tracking-tight'>Featured Projects</h1>
      </div>

      {/* First Row */}
      <div className='px-20'>
        <div className='cards w-full flex gap-5 mt-10'>

          {/* CARD 1 */}
          <motion.div
            onMouseEnter={() => setHovered(0)}
            onMouseLeave={() => setHovered(null)}
            className='cardcontainer relative w-1/2 h-[75vh]'
          >
            <h1 className='text-[#CDEA68] overflow-hidden absolute flex left-full text-7xl top-1/2 -translate-x-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter'>
              {"FYDE".split('').map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={hovered === 0 ? { y: "0%" } : { y: "100%" }}
                  transition={{
                    ease: [0.76, 0, 0.24, 1],
                    delay: index * 0.08,
                    duration: 0.5
                  }}
                  className='inline-block'
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <div className='card rounded-xl overflow-hidden w-full h-full'>
              <img
                className='w-full h-full object-cover'
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png"
                alt=""
              />
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            onMouseEnter={() => setHovered(1)}
            onMouseLeave={() => setHovered(null)}
            className='cardcontainer relative w-1/2 h-[75vh]'
          >
            <h1 className='text-[#CDEA68] overflow-hidden absolute flex right-full text-7xl top-1/2 translate-x-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter'>
              {"VISE".split('').map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={hovered === 1 ? { y: "0%" } : { y: "100%" }}
                  transition={{
                    ease: [0.76, 0, 0.24, 1],
                    delay: index * 0.08,
                    duration: 0.5
                  }}
                  className='inline-block'
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <div className='card rounded-xl overflow-hidden w-full h-full'>
              <img
                className='w-full h-full object-cover'
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png"
                alt=""
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Second Row */}
      <div className='px-20'>
        <div className='cards w-full flex gap-5 mt-10'>

          {/* CARD 3 */}
          <motion.div
            onMouseEnter={() => setHovered(2)}
            onMouseLeave={() => setHovered(null)}
            className='cardcontainer relative w-1/2 h-[75vh]'
          >
            <h1 className='text-[#CDEA68] overflow-hidden absolute flex left-full text-7xl top-1/2 -translate-x-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter'>
              {"ATH".split('').map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={hovered === 2 ? { y: "0%" } : { y: "100%" }}
                  transition={{
                    ease: [0.76, 0, 0.24, 1],
                    delay: index * 0.08,
                    duration: 0.5
                  }}
                  className='inline-block'
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <div className='card rounded-xl overflow-hidden w-full h-full'>
              <img
                className='w-full h-full object-cover'
                src="https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png"
                alt=""
              />
            </div>
          </motion.div>

          {/* CARD 4 */}
          <motion.div
            onMouseEnter={() => setHovered(3)}
            onMouseLeave={() => setHovered(null)}
            className='cardcontainer relative w-1/2 h-[75vh]'
          >
            <h1 className='text-[#CDEA68] overflow-hidden absolute flex right-full text-7xl top-1/2 translate-x-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter'>
              {"SOFTSTART".split('').map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={hovered === 3 ? { y: "0%" } : { y: "100%" }}
                  transition={{
                    ease: [0.76, 0, 0.24, 1],
                    delay: index * 0.06,
                    duration: 0.5
                  }}
                  className='inline-block'
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <div className='card rounded-xl overflow-hidden w-full h-full'>
              <img
                className='w-full h-full object-cover'
                src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png"
                alt=""
              />
            </div>
          </motion.div>

        </div>
      </div>

    </div>
  )
}

export default Featured
