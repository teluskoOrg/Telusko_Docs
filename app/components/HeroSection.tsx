import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router"

function HeroSection() {
  return (
    <section className="relative dark:bg-gradient-to-b from-[#1A1A1E] to-[#0F0F11]  dark:text-white overflow-hidden">
      <div 
      className="max-w-6xl mx-auto px-6 py-20 text-center relative z-10">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight mb-6"
        >
          Telusko Docs –{" "}
          <span className="text-violet-400">Your Guide to Tech Stacks</span>
        </motion.h1>
        

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8"
        >
          Learning new technologies can feel overwhelming. Telusko Docs makes it
          simple by providing clear, structured, and beginner-friendly
          documentation for popular tech stacks — from backend frameworks to
          frontend libraries, cloud platforms, and beyond.
        </motion.p>


        <motion.div
          className="hover:scale-105 duration-300"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover="hover"
        >
          <Link
            to="/docs"
            className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 rounded-2xl text-lg font-medium transition-colors shadow-lg text-white"
          >
            Get Started <motion.div
            variants={{
                hover : {
                    x : [0,12,0]
                }
            }}
            transition={{
                repeat : Infinity,
            }}
            >
                <ArrowRight size={20} /> 
                 </motion.div>
          </Link>
        </motion.div>

        {/* Extra line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-6 dark:text-gray-400 max-w-xl mx-auto text-base"
        >
          Jump into any tech stack you want to explore. Whether you’re
          building your first app or scaling a production system, Telusko Docs
          is your one-stop knowledge base. Our goal: help you understand, build,
          and scale projects faster.
        </motion.p>
      </div>

      {/* Background Glow */}
     <div className="absolute ]  "></div>

    </section>
  );
}

export default HeroSection;
