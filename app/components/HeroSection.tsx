import React, { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router"

function HeroSection() {

  return (
    <section className="relative font-DM-Sans  dark:text-white overflow-hidden ">
      <motion.div
      className="max-w-6xl mx-auto px-6 py-20 text-center relative z-10 flex flex-col gap-4 items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Title */}
      <motion.h1
        className="text-[3.875rem] font-bold text-[#EA0000]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <span className="font-UX font-[700] text-[#051A1E] dark:text-[#F4F4F4]">Telusko</span> <span 
        className="font-Playfair font-medium"><i>Docs</i></span>
      </motion.h1>

      <motion.p
        className="text-[1.5rem] text-[#2C2D2D] dark:text-[#EFEFEF] text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Friendly documentation for tech stacks - from backend frameworks to frontend libraries, cloud platforms, and beyond.
      </motion.p>



      <Link to="/docs" className="w-fit">
        <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
          whileHover="hover"
          
          className="cursor-pointer flex gap-2 justify-center items-center w-fit py-4 px-8 
                     dark:bg-white dark:text-black bg-[#051A1E] text-[#FAFFFC] rounded-2xl"
        >
          Get Started
          <motion.span
            variants={{
              hover: { x: [0, 4, 0], y: [0, -4, 0] }, 
            }}
            transition={{
              repeat: Infinity,
              duration: 0.6,
              ease: "easeInOut",
            }}
          >
            <ArrowUpRight size={20} />
          </motion.span>
        </motion.button>
      </Link>

    </motion.div>
      <div className="max-[1050px]:p-4 pb-4">
        <motion.div
        initial={{
          opacity : 0,y : 100, scale : .95
        }} 
        whileInView={{
          opacity : 1 , y : 0,  scale : 1 
        }}
        transition={{
          duration : .6, delay : 0.8
        }}
        viewport={{ once :true ,  amount : 0}}

        className="max-[1050px]:pb-4 w-full max-w-5xl mx-auto rounded-2xl overflow-hidden   border-4 md:shadow-[0_0_8px_4px_#EA0000]  border-[#BB0000] border-[#EA0000]">
        <div className="max-md:justify-center flex  items-center gap-1 dark:bg-[#161618] bg-gray-100 px-3 py-2  border-b dark:border-[#000] border-gray-200">
          <span className="max-md:hidden w-3 h-3 rounded-full bg-red-400"></span>
          <span className="max-md:hidden w-3 h-3 rounded-full bg-yellow-400"></span>
          <span className="max-md:hidden w-3 h-3 rounded-full bg-green-400"></span>
          <span className="max-md:hidden ml-3 text-sm text-gray-500">https://docs.telusko.com/docs</span>
          <span className="md:hidden flex justify-center items-center w-4 h-4 rounded-full bg-gray-300">
            <span className="h-1 w-1 bg-black"> 
            </span>
          </span>
        </div>
        
        <iframe
          src="https://docs.telusko.com/docs"
          className="w-full h-[600px] bg-white dark:bg-[#000] pointer-events-none"
          frameBorder="0"
          scrolling="no"
          title="Website Preview"
        />
      </motion.div>
    </div>
      

    </section>
  );
}

export default HeroSection;
