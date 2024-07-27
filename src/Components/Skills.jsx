import React from 'react';
import { FaReact, FaJsSquare, FaNode, FaHtml5, FaCss3Alt, FaFigma, FaPaintBrush } from 'react-icons/fa';

const skills = [
  { name: 'React JS', icon: FaReact },
  { name: 'Figma Designer', icon: FaFigma },
  { name: 'JS Expert', icon: FaJsSquare },
  { name: 'Back-end Designer', icon: FaNode },
  { name: 'Graphics', icon: FaPaintBrush },
  { name: 'HTML & CSS', icon: FaHtml5 },
];

const Skills = () => {
  return (
    <div className="bg-black min-h-screen p-4 sm:p-8 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8">My Skills</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div key={index} className="flex flex-col items-center p-4 bg-gray-800 rounded-lg transform transition-transform duration-300 hover:scale-110">
                <IconComponent className="text-4xl mb-2" />
                <p className="text-lg">{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
