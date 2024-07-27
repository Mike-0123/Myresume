// src/Projects.js
import React from 'react';
import image1 from '../assets/Photo/Bonous.png'
import image2 from '../assets/Photo/spartial.png'
import image3 from '../assets/Photo/image3.png'

const projects = [
  {
    title: 'Spartial Engineering',
    description: 'This is a the website for the construction and architecture designing. It includes key features and what makes it special.',
    link: 'https://spartial-engineering.netlify.app/',
    image: image2, // Replace with your image URL
  },
  {
    title: 'Centralized Dicount and deals',
    description: 'This is in progress mobile and web for discount and deals. It highlights the main functionalities and its purpose.',
    link: 'https://example.com/project-two',
    image: image1, // Replace with your image URL
  },
  {
    title: 'Umubaji Furniture',
    description: 'This is a website used to show the furniture priduct. It covers the unique aspects and its impact.',
    link: 'https://umubaji.netlify.app/',
    image: image3, // Replace with your image URL
  },
];

const Projects = () => {
  return (
    <section className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:underline"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
