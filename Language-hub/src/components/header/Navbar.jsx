import React from "react";
import { NavLink } from "react-router";
import { motion } from "framer-motion";
import { useAuth } from "../../contexts/AuthContext";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  
  // Smooth scroll function for navigation
  const scrollToSection = (sectionId) => {
    // Function to perform the scroll
    const performScroll = (element) => {
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        return true;
      }
      return false;
    };
    
    // Try immediate scroll
    const element = document.getElementById(sectionId);
    if (performScroll(element)) {
      return;
    }
    
    // If not found, try multiple times with increasing delays
    const attempts = [100, 300, 500];
    attempts.forEach((delay, index) => {
      setTimeout(() => {
        const retryElement = document.getElementById(sectionId);
        if (performScroll(retryElement)) {
          return;
        }
      }, delay);
    });
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  return (
    <motion.div 
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <div className="flex flex-col gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink 
                  to="/" 
                  onClick={() => scrollToSection('home')}
                  className="hover:text-primary transition-colors duration-300"
                >
                  HOME
                </NavLink>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink 
                  to="/" 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-primary transition-colors duration-300"
                >
                  ABOUT US
                </NavLink>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink 
                  to="/" 
                  onClick={() => scrollToSection('courses')}
                  className="hover:text-primary transition-colors duration-300"
                >
                  COURSES
                </NavLink>
              </motion.div>
              <details>
                <summary>PAGES</summary>
                <div className="flex flex-col gap-2">
                  <NavLink to="/PAGES">Pages</NavLink>
                  <NavLink to="/Teacher">Teacher</NavLink>
                  <NavLink to="/pricing">Pricing</NavLink>
                </div>
              </details>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink 
                  to="/" 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-primary transition-colors duration-300"
                >
                  CONTACT
                </NavLink>
              </motion.div>
            </div>
          </ul>
        </div>
        <a className="btn btn-ghost font-roboto text-2xl">Language <span className="text-accent text-2xl">HUB</span></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <div className="flex gap-5 font-popins font-semibold">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <NavLink 
                to="/" 
                onClick={() => scrollToSection('home')}
                className="hover:text-primary transition-colors duration-300"
              >
                HOME
              </NavLink>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <NavLink 
                to="/" 
                onClick={() => scrollToSection('about')}
                className="hover:text-primary transition-colors duration-300"
              >
                ABOUT US
              </NavLink>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <NavLink 
                to="/" 
                onClick={() => scrollToSection('courses')}
                className="hover:text-primary transition-colors duration-300"
              >
                COURSES
              </NavLink>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <NavLink 
                to="/" 
                onClick={() => scrollToSection('contact')}
                className="hover:text-primary transition-colors duration-300"
              >
                CONTACT
              </NavLink>
            </motion.div>
          </div>
        </ul>
      </div>
      <div className="navbar-end">
        {currentUser ? (
          <div className="flex items-center space-x-4">
            <NavLink 
              to="/profile"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <img 
                src={currentUser.photoURL || '/default-avatar.png'} 
                alt="Profile" 
                className="w-8 h-8 rounded-full"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiNFNUU3RUIiLz4KPHBhdGggZD0iTTE2IDE2QzE4LjIwOTEgMTYgMjAgMTQuMjA5MSAyMCAxMkMyMCA5Ljc5MDg2IDE4LjIwOTEgOCAxNiA4QzEzLjc5MDkgOCAxMiA5Ljc5MDg2IDEyIDEyQzEyIDE0LjIwOTEgMTMuNzkwOSAxNiAxNiAxNloiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTE2IDIwQzEwLjQ3NzEgMjAgNiAyMy41ODE3IDYgMjhIMjZDMjYgMjMuNTgxNyAyMS41MjI5IDIwIDE2IDIwWiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K'
                }}
              />
              <span className="hidden sm:block">{currentUser.displayName || 'Profile'}</span>
            </NavLink>
            <motion.button 
              onClick={handleLogout}
              className="btn btn-outline btn-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Logout
            </motion.button>
          </div>
        ) : (
          <div className="flex items-center space-x-2">
            <NavLink 
              to="/login"
              className="btn btn-ghost btn-sm"
            >
              Login
            </NavLink>
            <NavLink 
              to="/signup"
              className="btn btn-primary btn-sm"
            >
              Sign Up
            </NavLink>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
