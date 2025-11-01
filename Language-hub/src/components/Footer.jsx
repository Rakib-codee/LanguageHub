import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Send,
  Heart,
  ArrowUp,
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600', label: 'Facebook' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400', label: 'Twitter' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500', label: 'Instagram' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-700', label: 'LinkedIn' },
    { icon: Youtube, href: '#', color: 'hover:text-red-600', label: 'YouTube' },
  ];

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press', href: '#press' },
    ],
    courses: [
      { name: 'English', href: '/category/English' },
      { name: 'Spanish', href: '/category/Spanish' },
      { name: 'French', href: '/category/French' },
      { name: 'Japanese', href: '/category/Japanese' },
    ],
    support: [
      { name: 'Help Center', href: '#help' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
    ],
  };

  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               backgroundRepeat: 'repeat'
             }}>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Language <span className="text-white">HUB</span>
              </h3>
              <p className="text-gray-300 mt-2 text-sm leading-relaxed">
                Empowering learners worldwide with interactive language courses and expert instruction.
              </p>
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-3">
              <motion.div 
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Mail size={16} className="text-indigo-400" />
                <span className="text-sm">info@languagehub.com</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Phone size={16} className="text-indigo-400" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin size={16} className="text-indigo-400" />
                <span className="text-sm">123 Learning St, Education City</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 capitalize text-indigo-300">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (index * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm block"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-indigo-300">
              Stay Updated
            </h4>
            <p className="text-gray-300 text-sm mb-4">
              Get the latest courses and learning tips delivered to your inbox.
            </p>
            
            <motion.form 
              onSubmit={handleNewsletterSubmit}
              className="space-y-3"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white placeholder-gray-400 transition-all duration-300"
                  required
                />
                <motion.button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-md transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Send size={16} />
                </motion.button>
              </div>
              
              {isSubscribed && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-sm flex items-center gap-2"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    ✓
                  </motion.div>
                  Thank you for subscribing!
                </motion.div>
              )}
            </motion.form>
          </motion.div>
        </div>

        {/* Social Media Links */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">Follow us:</span>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`text-gray-400 ${social.color} transition-all duration-300 p-2 rounded-lg hover:bg-gray-800`}
                    whileHover={{ 
                      scale: 1.2, 
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                    viewport={{ once: true }}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <ArrowUp size={16} />
              <span className="text-sm">Back to Top</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-8 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>© 2024 Language Hub. Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={16} className="text-red-500" />
            </motion.span>
            <span>Mahfujur Rahman Rakib.</span>
          </div>
          
          <div className="flex gap-6 text-sm">
            <motion.a
              href="#privacy"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#terms"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Terms of Service
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;