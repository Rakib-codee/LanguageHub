import React from 'react';
import { motion } from 'framer-motion';
import bookimg from "../../assets/book.png"
import diagram from "../../assets/diagram.png"

const StaticSection = () => {
    const features = [
        {
            icon: bookimg,
            title: "Online Tutoring",
            bgColor: "bg-purple-100",
            alt: "book icon for tutoring"
        },
        {
            icon: bookimg,
            title: "50+ Courses",
            bgColor: "bg-orange-200",
            alt: "book icon for courses"
        },
        {
            icon: diagram,
            title: "Life time Access",
            bgColor: "bg-sky-200",
            alt: "diagram icon for access"
        },
        {
            icon: diagram,
            title: "Active Learning",
            bgColor: "bg-amber-200",
            alt: "diagram icon for learning"
        }
    ];

    return (
        <div className='md:flex grid grid-cols-2 gap-3 ml-4 justify-between items-center font-roboto font-semibold'>
            {features.map((feature, index) => (
                <motion.div 
                    key={index}
                    className='flex items-center gap-2'
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                        duration: 0.6, 
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 100
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                        scale: 1.05, 
                        y: -5,
                        transition: { duration: 0.2 }
                    }}
                >
                    <motion.img 
                        src={feature.icon} 
                        className={`w-12 h-12 ${feature.bgColor} p-3 rounded-2xl`} 
                        alt={feature.alt}
                        whileHover={{ 
                            rotate: [0, -10, 10, 0],
                            transition: { duration: 0.5 }
                        }}
                    />
                    <motion.h1 
                        className='text-lg'
                        whileHover={{ 
                            transition: { duration: 0.2 }
                        }}
                    >
                        {feature.title}
                    </motion.h1>
                </motion.div>
            ))}
        </div>
    );
};

export default StaticSection;