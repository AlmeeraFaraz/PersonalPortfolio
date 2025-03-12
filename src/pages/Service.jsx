import React from 'react';
import { FaCode, FaPalette, FaMobileAlt } from 'react-icons/fa';
import { LucideLaptop, LucideBrush, LucideSmartphone } from 'lucide-react';

const Service = () => {
  const services = [
    {
      icon: <FaCode size={40} className="text-primary" />,
      title: 'ReactJs Development',
      description: 'Crafting fast, interactive, and scalable web applications with modern UI/UX. Ensuring seamless performance and responsiveness across all devices.',
      logo: <LucideLaptop size={24} className="text-secondary" />,
    },
    {
      icon: <FaPalette size={40} className="text-primary" />,
      title: 'UI Design',
      description: 'Creating intuitive and visually appealing interfaces that enhance user engagement. Focusing on usability, accessibility, and aesthetic design principles.',
      logo: <LucideBrush size={24} className="text-secondary" />,
    },
    {
      icon: <FaMobileAlt size={40} className="text-primary" />,
      title: 'Wordpress Development',
      description: 'Designing and developing custom WordPress websites tailored to your brand. Providing secure, optimized, and easy-to-manage solutions.',
      logo: <LucideSmartphone size={24} className="text-secondary" />,
    },

  ];

  return (
    <section id="services" className="container mx-auto py-20 px-4 bg-black">
     <div className="text-center">
        <p className="text-lg text-white underline">Service</p>
        <h1 className="text-4xl font-bold text-white pt-4 italic">My Services</h1>
        <p className="text-base text-white py-8">
          "Crafting modern and responsive web solutions with React.js and WordPress. <br /> Elevating brands through sleek UI design and efficient development."
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg p-6 shadow-lg shadow-amber-50 text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="mb-4 flex justify-center items-center gap-2">
              {service.logo} {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-dark-secondary">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
