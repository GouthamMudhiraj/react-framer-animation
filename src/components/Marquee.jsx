import React from 'react'
import { motion } from "framer-motion"

const Marquee = () => {
  return (
    <div
    
      className="w-full py-20 bg-[#004D43] rounded-3xl"
    >
      <div className="text-white border-t-2 border-b-2 border-zinc-300 overflow-hidden flex items-center pr-20 whitespace-nowrap">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[14vw] leading-none font-semibold"
        >
          WE ARE OCHI
        </motion.h1>

        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[14vw] leading-none font-semibold"
        >
          WE ARE OCHI
        </motion.h1>
      </div>
    </div>
  )
}

export default Marquee
