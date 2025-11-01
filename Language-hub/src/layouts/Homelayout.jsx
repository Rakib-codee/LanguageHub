import React from "react";
import { Outlet, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/header/Navbar";
import Banner from "../components/header/Banner";
import StaticSection from "../components/Homelayout/StaticSection";
import HowToDO from "../components/Homelayout/HowToDO";
import SubscriptionPlansSlider from "../components/Homelayout/SubscriptionPlansSlider";
import SubcriptionHeader from "../components/Homelayout/SubcriptionHeader";
import Testimonials from "../components/Homelayout/Testimonials";
import StatsSection from "../components/Homelayout/StatsSection";
import BlogSection from "../components/Homelayout/BlogSection";
import ScrollProgress from "../components/ScrollProgress";
import FloatingActionButton from "../components/FloatingActionButton";
import ParallaxBackground from "../components/ParallaxBackground";
import Footer from "../components/Footer";

const Homelayout = () => {
  return (
    <div>
      <ParallaxBackground />
      <ScrollProgress />
      <header id="home" className="container mx-auto mt-4">
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      <motion.section 
        id="static"
        className="max-w-7xl mx-auto mt-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <StaticSection></StaticSection>
      </motion.section>

      {/* Language Category Options */}
      <motion.section 
        id="courses"
        className="max-w-7xl mx-auto mt-16 mb-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Header Section */}
        <div className="flex justify-between items-start mb-8">
          <div className="flex flex-col">
            <p className="text-indigo-600 font-medium text-sm mb-2">
              Our Courses
            </p>
            <h1 className="font-roboto font-semibold text-[40px] text-slate-800 mb-4">
              Choose Your Language
            </h1>
          </div>
          <div className="max-w-md ml-8">
            <p className="text-gray-600 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        {/* Language Category Buttons */}
        <motion.div 
          className="bg-gray-100 rounded-lg p-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className=" md:grid md:grid-cols-5 grid cols-2    gap-6">
            {[
              {
                name: "English",
                color: "bg-indigo-600",
                textColor: "text-white",
              },
              {
                name: "Chinese",
                color: "bg-white",
                textColor: "text-[#111f62]",
              },
              {
                name: "French",
                color: "bg-white",
                textColor: "text-[#111f62]",
              },
              {
                name: "Japanese",
                color: "bg-white",
                textColor: "text-[#111f62]",
              },
              {
                name: "Spanish",
                color: "bg-white",
                textColor: "text-[#111f62]",
              },
            ].map((language, index) => (
              <motion.div
                key={language.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={`/category/${language.name}`}
                  className={`${language.color} ${language.textColor} px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-white hover:shadow-lg block`}
                >
                  {language.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      <main className="max-w-7xl mx-auto mt-16">
        <Outlet></Outlet>
      </main>
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <HowToDO></HowToDO>
      </motion.section>
      <motion.section 
        id="contact"
        className="container mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <SubcriptionHeader></SubcriptionHeader>
        <SubscriptionPlansSlider></SubscriptionPlansSlider>
        <Testimonials></Testimonials>
        <StatsSection></StatsSection>
        <BlogSection></BlogSection>
      </motion.section>
        
      <Footer />
      <FloatingActionButton />
    </div>
  );
};

export default Homelayout;
