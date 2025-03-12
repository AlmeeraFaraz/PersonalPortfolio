import React from "react";
import { motion } from "framer-motion";

const AboutP = () => {
  return (
    <div  className="bg-black min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center px-6 lg:px-20 py-8 gap-12">
      {/* Left Section - Text */}
      <motion.div 
        className="lg:w-1/2 text-center lg:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-lg text-white underline">About Me</p>
        <h1 className="text-4xl font-bold italic pt-4 text-white">Who I Am</h1>
        <p className="text-base text-white pt-6">
          "I am a passionate developer with expertise in modern web technologies. 
          My journey in the tech world is fueled by a love for innovation and creativity."
        </p>
        <p className="text-base text-white pt-4"> As an undergraduate Software Engineer, I bring a blend of technical expertise and business acumen to the table. Currently working as a Web Developer at Gutech International LLC, I have developed proficiency in WordPress, HTML5, CSS3, Tailwind CSS, JavaScript, React.js with UI Designing. My experience spans creating dynamic web solutions and enhancing user experiences. In addition to my technical skills, I have a strong background in C and C++, and I serve as a Business Development Executive, aligning technology initiatives with business goals. I am eager to continue learning, growing, and contributing to impactful projects in both the web development and software engineering fields.</p>
      </motion.div>

      {/* Right Section - Image with Animation */}
      <motion.div 
        className="lg:w-1/2 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <img 
          src="https://images.unsplash.com/photo-1499914485622-a88fac536970?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Profile" 
          className="w-64 h-64 lg:w-96 lg:h-96 rounded-full shadow-lg"
        />
      </motion.div>
    </div>
  );
};


const Experience = () => {
  const experienceData = [
    { year: "Present", title: "Undergraduate Software Engineer", company: "University of Karachi" },
    { year: "2025", title: "Web Developer", company: "Gutech International LLC" },
    { year: "2023", title: "Business Development", company: "Gutech International LLC" }
  ];

  return (
    <div  className="bg-black pb-14 px-6 lg:px-20">
      <div className="text-center">
        <h1 className="text-3xl font-bold italic text-white">"My Journey"</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-6 pt-8">
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 w-full sm:w-[80%] md:w-[45%] lg:w-[30%] text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            <h2 className="text-xl font-bold text-black">{exp.year}</h2>
            <p className="text-lg text-gray-800 mt-2">{exp.title}</p>
            <p className="text-base text-gray-500">{exp.company}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div id="about" >
      <AboutP />
      <Experience />
    </div>
  );
};

export default About;