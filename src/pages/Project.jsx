import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "ECommerce Website",
    image: "https://i.pinimg.com/736x/89/77/ac/8977ac9d1c21b1d610409a8220c47a22.jpg",
    techStack: ["React.js", "Tailwind CSS"],
    link: "https://soundwaveshop.netlify.app/",
  },
  {
    id: 2,
    title: "Quiz-App Website",
    image: "https://uizard.io/static/c2361038dd6a0b7c6798d66cf144d6f7/a8e47/921ac800edbc857315dd3b542b7d93732fcbf2fc-1440x835.png",
    techStack: ["React.js", "Tailwind CSS", "Dynamic Routing"],
    link: "https://yourecommerce.com",
  },
  {
    id: 3,
    title: "Company Website",
    image: "https://img.freepik.com/free-photo/shoulder-shot-young-game-developer-working-from-home-while-his-girlfriend-walks-backgorund_482257-22386.jpg?t=st=1741729151~exp=1741732751~hmac=fb7b8d83f4a5cf5b9f57e9c33ad5b8124301d19a9000953aa356a74fbc49ee9c&w=740",
    techStack: ["WordPress"],
    link: "https://modelaccounting.com",
  },
];

export default function Project() {
  return (
    <div id="projects" className="container mx-auto px-4 py-12 bg-black">
      <div className="text-center">
        <p className="text-lg text-white underline">Project</p>
        <h1 className="text-4xl font-bold text-white pt-4 italic">My Recent Work</h1>
        <p className="text-base text-white pt-6">
          "Explore my projects, built with modern tech stacks, <br /> showcasing creativity and innovation."
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-10 px-6 sm:px-12 lg:px-20">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => window.open(project.link, "_blank")}
    >
      <img
        src={project.image}
        alt={project.title}
        className={`w-full h-64 object-cover transition-transform duration-300 transform ${
          hovered ? "scale-110 blur-sm" : "scale-100"
        }`}
      />
      {hovered && (
        <div className="absolute inset-0 bg-white bg-opacity-70 flex flex-col items-center justify-center text-black text-lg p-4">
          <h3 className="text-xl font-bold mb-2 text-center">{project.title}</h3>
          <p className="text-sm text-center">{project.techStack.join(" • ")}</p>
        </div>
      )}
    </div>
  );
}
