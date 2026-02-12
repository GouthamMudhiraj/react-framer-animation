import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["WE", "CREATE", "EYE-OPENING", "PRESENTATIONS"];

const Loader = ({ setLoading }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 600);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [setLoading]);

  return (
    <motion.div
      className="fixed inset-0 z-[999] bg-[#004D43] text-white flex flex-col justify-between p-10"
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="space-y-2 mt-20">
        {words.map((word, index) => (
          <div key={index} className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{
                delay: index * 0.15,
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="text-[8vw] font-extrabold leading-[7.5vw]"
            >
              {word}
            </motion.h1>
          </div>
        ))}
      </div>

      <div className="flex justify-end text-[6vw] font-bold">
        {count}%
      </div>
    </motion.div>
  );
};

export default Loader;
