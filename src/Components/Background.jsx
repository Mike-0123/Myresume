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
const Background = () => {
  return (
    <>
    <div className="bg-gray-900 min-h-screen p-4 sm:p-8 justify-center">
      <div className="max-w-4xl mx-auto bg-transparent">
        <div className="text-white text-center py-4">
          <h1 className="text-2xl sm:text-3xl font-bold">My Background</h1>
        </div>
        <div className="p-6 text-white text-xl">
          <p className="mb-4">
            I am a student studying computer and software engineering at the University of Rwanda. My hobbies include reading and listening to music. I am passionate about web development and app development.
            My goal is to become a full stack software engineer to solve the world's problems. I aim to write user-friendly code, especially for beginners.
            I have experience as a full-stack and mobile developer, as well as a UI designer. I am currently on holiday and fully committed to learning and enhancing my skills.

          </p>
        
        
        </div>

        </div>
        <div className="p-4 sm:p-8 text-white">
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
        </div></div>
        
 

    </div>
   
      </>
  );
}

export default Background;
