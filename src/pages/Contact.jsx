import { div } from 'framer-motion/client';
import { Mail, Phone } from 'lucide-react';
import React, { useState } from 'react';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      window.location.href = "mailto:almeerafaraz18@gmail.com";
    }, 2000);
  };

  return (
    <div className="py-20 bg-black text-center min-h-screen px-4 flex flex-col items-center">
      <p className="text-lg text-white underline">Contact Me</p>
      <h1 className="text-4xl font-bold text-white italic pt-4">Have a Project?</h1>
      <p className="text-base text-white pt-6 max-w-lg">
        "Feel free to reach out for any inquiries, collaborations, or just to say hello! I'm always open to discussing new projects and ideas."
      </p>
      
      <div className="flex flex-wrap justify-center gap-12 pt-8 w-full max-w-5xl">
        {/* Contact Form */}
        <section id="contact" className="w-full md:w-2/3 lg:w-1/2">
          {formSubmitted ? (
            <div>
            <div className="text-amber-700 text-lg py-6">
              Thank you for contacting me! Your form has been submitted. I will reach out to you soon.
            </div>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
              <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 border  rounded" required />
              <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 border  rounded" required />
              <textarea placeholder="Your Message" className="w-full p-3 mb-4 border rounded" rows="4" required></textarea>
              <button type="submit" className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition">Send</button>
            </form>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
              <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 border  rounded" required />
              <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 border  rounded" required />
              <textarea placeholder="Your Message" className="w-full p-3 mb-4 border  rounded" rows="4" required></textarea>
              <button type="submit" className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition">Send</button>
            </form>
          )}
        </section>
        
        {/* Contact Info */}
        <div className="flex flex-col gap-6 w-full md:w-1/4 lg:w-1/3 ">
          <div className="flex items-center gap-4 p-5 bg-white border shadow-amber-50 rounded shadow-2xl">
            <Mail className="text-black" size={32} />
            <div>
              <h1 className="text-xl text-black font-bold">Email:</h1>
              <p className="text-gray-600 font-semibold text-lg break-all">almeerafaraz18@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-5 bg-white border shadow-amber-50 rounded shadow-2xl">
            <Phone className="text-black" size={32} />
            <div>
              <h1 className="text-xl text-black font-bold">Phone:</h1>
              <p className="text-gray-600 font-semibold text-lg">+92 335-2900-709</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
