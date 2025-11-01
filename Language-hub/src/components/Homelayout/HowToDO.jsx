import React from "react";
import { motion } from "framer-motion";
import imagesir from "../../assets/image2.png";
import {  Check } from "lucide-react";
const HowToDO = () => {
  const steps = [
    {
      title: "Create Account",
      description: "Lorem ipsum dolor sit amet consecte nadipiscing elit"
    },
    {
      title: "Select Course",
      description: "Lorem ipsum dolor sit amet consecte nadipiscing elit"
    },
    {
      title: "Learn Your Skill",
      description: "Lorem ipsum dolor sit amet consecte nadipiscing elit"
    },
    {
      title: "Get Certificate",
      description: "Lorem ipsum dolor sit amet consecte nadipiscing elit"
    }
  ];

  return (
    <div className="parent bg-purple-50 ">
      <div className="container mx-auto grid md:grid-cols-2 grid-cols-1 justify-around items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.img 
            src={imagesir} 
            className="w-[500px] h-[700px]" 
            alt="Learning process illustration"
            whileHover={{ 
              scale: 1.05,
              rotate: 2,
              transition: { duration: 0.3 }
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="pb-5 text-popins"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Join With Us
          </motion.p>
          <motion.h1 
            className="pb-5 text-roboto text-3xl font-semibold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Find Out Why You Should Learn <br /> With Verbalizer
          </motion.h1>
          <motion.p 
            className="pb-13"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
            officiis a consectetur! Delectus perferendis magnam iusto? Veritatis
            ipsam, magnam velit quibusdam excepturi, enim nisi nostrum eius
            molestiae ea itaque hic?
          </motion.p>
          <motion.div 
            className="md:grid md:grid-cols-2 md:w-max md:h-max  grid-cols-1 md:gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="card-parent md:w-[300px] md:h-[100px] w-full p-3 bg-base-300"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.8 + (index * 0.1),
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
              
                <motion.div 
                  className="flex items-center gap-3 group cursor-pointer"
                  whileHover={{ 
                    x: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div 
                    className="bg-green-600 text-white rounded-full p-4"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 360,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <Check size={20}></Check>
                  </motion.div>
                  <div>
                    <motion.span 
                      className="text-lg font-semibold"
                      whileHover={{ 
                        transition: { duration: 0.2 }
                      }}
                    >
                      {step.title}
                    </motion.span>
                    <p>
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HowToDO;
