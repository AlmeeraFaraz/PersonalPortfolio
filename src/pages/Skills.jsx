import React from "react";

const skills = [
  { name: "HTML", percentage: 95 },
  { name: "Tailwind CSS", percentage: 90 },
  { name: "JavaScript", percentage: 80 },
  { name: "React.js", percentage: 85 },
  { name: "WordPress", percentage: 75 },
  { name: "UI Design", percentage: 70 },
];

const SkillCircle = ({ name, percentage }) => {
  const radius = 45;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center flex-wrap w-full sm:w-[45%] md:w-[30%] lg:w-[26%] bg-white shadow-2xl shadow-neutral-500 p-6 sm:p-8 rounded">
      <svg width="140" height="140" viewBox="0 0 110 110">
        <circle
          cx="55"
          cy="55"
          r={radius}
          strokeWidth={strokeWidth}
          fill="transparent"
          stroke="#E6E0E0"
        />
        <circle
          cx="55"
          cy="55"
          r={radius}
          strokeWidth={strokeWidth}
          fill="transparent"
          stroke="#333333"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 55 55)"
        />
        <text
          x="55"
          y="55"
          textAnchor="middle"
          dy="5"
          className="font-bold text-lg fill-gray-800"
        >
          {percentage}%
        </text>
      </svg>
      <p className="mt-2 text-lg font-medium text-gray-700">{name}</p>
    </div>
  );
};

const Skills = () => {
  return (
    <div id="skills" className="bg-black min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="text-center">
        <p className="text-lg text-white underline">Skills</p>
        <h1 className="text-4xl font-bold text-white pt-4 italic">My Skills</h1>
        <p className="text-base text-center text-white pt-6">
          "Showcasing a diverse skill set, blending creativity <br /> with cutting-edge technology."
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 p-4 sm:p-10 rounded-lg w-full max-w-6xl">
        {skills.map((skill, index) => (
          <SkillCircle key={index} name={skill.name} percentage={skill.percentage} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
