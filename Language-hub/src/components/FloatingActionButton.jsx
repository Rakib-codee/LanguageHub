import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, MessageCircle, Phone, Mail } from 'lucide-react';

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const actions = [
    {
      icon: <MessageCircle size={20} />,
      label: "Chat",
      color: "bg-blue-500",
      action: () => console.log("Chat clicked")
    },
    {
      icon: <Phone size={20} />,
      label: "Call",
      color: "bg-green-500",
      action: () => console.log("Call clicked")
    },
    {
      icon: <Mail size={20} />,
      label: "Email",
      color: "bg-purple-500",
      action: () => console.log("Email clicked")
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mb-4 space-y-3"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {actions.map((action, index) => (
              <motion.button
                key={index}
                className={`${action.color} text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center gap-2`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                onClick={action.action}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {action.icon}
                <span className="text-sm font-medium">{action.label}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          if (isOpen) {
            scrollToTop();
          } else {
            setIsOpen(!isOpen);
          }
        }}
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ChevronUp size={24} />
      </motion.button>
    </div>
  );
};

export default FloatingActionButton;
