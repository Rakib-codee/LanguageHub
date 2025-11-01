import React from "react";
import { motion } from "framer-motion";
import timg from "../../assets/teacher2.jpg";

const Banner = () => {
  return (
    <section className="relative w-full min-h-screen bg-linear-to-br from-[#ffffff] via-[#e6e5ff] to-[#e6e5ff] overflow-hidden flex items-center">
      
      {/* Abstract wave/background shapes */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-[#dcdcff] rounded-full -translate-x-1/2 -translate-y-1/2 opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#e6e5ff] rounded-full translate-x-1/3 translate-y-1/3 opacity-30"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10 w-full px-6 md:px-12">

        {/* Left Content */}
        <motion.div 
          className="flex flex-col space-y-6 max-w-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-[#111f62] text-4xl md:text-5xl font-bold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Learn New <br /> Languages and <br />
            <motion.span 
              className="border-b-4 border-[#a3bffa] inline-block"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Move Forward
            </motion.span>
          </motion.h1>

          <motion.p 
            className="text-[#4b5563] text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </motion.p>

          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button 
              className="bg-[#6366f1] text-white px-6 py-3 rounded-lg hover:bg-[#4c51bf] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
            <motion.button 
              className="flex items-center gap-2 bg-white border-2 border-[#6366f1] text-[#6366f1] px-6 py-3 rounded-lg hover:bg-[#6366f1] hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M4 2v20l16-10L4 2z" />
              </svg>
              Watch Intro
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Hero Image */}
        <motion.div 
          className="relative flex items-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.img
            src={timg}
            alt="Student with books"
            className="max-w-sm md:max-w-lg h-[600px] object-contain drop-shadow-xl"
            whileHover={{ rotate: 2, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />

          {/* Floating Info Cards */}
          <motion.div 
            className="absolute top-10 -right-20 w-44   md:bg-white md:shadow-lg rounded-xl p-4 text-sm flex flex-col gap-2"
            initial={{ opacity: 0, y: -20, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <p className="font-semibold hidden md:block text-[#111f62]">Largest Collection in Every Course</p>
            <p className="hidden md:block">Expert Teachers</p>
          </motion.div>
          <motion.div 
            className="absolute top-[200px] right-[-60px] w-36 md:bg-white md:shadow-lg rounded-xl p-3 text-sm flex flex-col gap-1 items-center"
            initial={{ opacity: 0, y: -20, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <span className="font-bold hidden md:block text-[#6366f1]">60+</span>
            <p className="hidden md:block">Interactive Courses</p>
          </motion.div>
          <motion.div 
            className="absolute bottom-32 right-[-100px] w-44 md:bg-white md:shadow-lg rounded-xl p-4 text-sm flex flex-col gap-1"
            initial={{ opacity: 0, y: 20, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <p className="hidden md:block">Get 20% Disc Off On Every Course</p>
            <p className="hidden md:block">Learn New Skills</p>
          </motion.div>
          <motion.div 
            className="absolute bottom-10 -left-20 w-40 md:bg-white md:shadow-lg rounded-xl p-3 text-sm flex flex-col gap-1 items-center"
            initial={{ opacity: 0, y: 20, x: -20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <span className="font-bold hidden md:block text-[#6366f1]">1250+</span>
            <p className="hidden md:block">Active Students</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
