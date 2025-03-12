import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';


const Hero = () => {
  return (
    <section 
      id="hero" 
      className="container mx-auto pt-60 pb-30 h-auto flex flex-col items-center justify-center text-white text-center px-6 bg-gradient-to-b from-gray-900 to-black"
    >
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-dark-secondary">
          Hello, I'm <span className="text-amber-100">Almeera</span>
        </h1>
        <TypeAnimation
          sequence={['React.js Developer', 1000, 'WordPress Developer', 1000, 'UI Designer', 1000]}
          wrapper="h2"
          cursor={true}
          repeat={Infinity}
          className="text-2xl md:text-4xl font-light text-amber-100 mb-6"
        />

        <p className="text-lg md:text-xl mb-8 text-gray-300">
          Passionate about crafting stunning and efficient web experiences.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.5, duration: 1 }}
        className="flex gap-4 mb-6"
      >
        <a href="https://www.linkedin.com/in/almeera-faraz-a81808278/?originalSubdomain=pk" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-700 hover:text-blue-500 transition-all">
          <FaLinkedin size={36} />
        </a>
        <a href="https://github.com/AlmeeraFaraz" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-gray-700 transition-all">
          <FaGithub size={36} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-fuchsia-950 font-semibold hover:text-fuchsia-600 transition-all">
          <FaInstagram size={36} />
        </a>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.8, duration: 1 }}
        className="flex gap-4"
      >
        <a href="mailto:almeerafaraz109@gmail.com" className="bg-white text-black px-6 py-3 text-lg font-semibold border border-gray-500 rounded-lg shadow-md hover:bg-gray-200 transition-all">
          Hire Me
        </a>
        <a href={"file:///C:/Users/almeera/Downloads/Almeera%20Faraz.pdf"} download className="bg-transparent border border-white text-lg text-white px-6 py-3 rounded-lg shadow-md hover:bg-white hover:text-black transition-all cursor-pointer">
          Download CV
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
