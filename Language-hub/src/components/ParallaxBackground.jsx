import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ParallaxBackground = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated background shapes */}
      <motion.div
        className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full"
        style={{ transform: `translateY(${offsetY * 0.5}px) translateX(${offsetY * 0.2}px)` }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-pink-200/30 to-blue-200/30 rounded-full"
        style={{ transform: `translateY(${offsetY * -0.3}px) translateX(${offsetY * -0.1}px)` }}
        animate={{
          scale: [1.1, 1, 1.1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-green-200/30 to-yellow-200/30 rounded-full"
        style={{ transform: `translateY(${offsetY * 0.4}px) translateX(${offsetY * 0.3}px)` }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-indigo-400/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `translateY(${offsetY * (0.1 + Math.random() * 0.2)}px)`
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export default ParallaxBackground;
