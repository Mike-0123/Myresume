import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: 'Frontend Developer',
      company: 'Tech Solutions Ltd',
      duration: 'Jan 2022 - Present',
      description: 'Developed and maintained web applications using React and Tailwind CSS.',
    },
    {
      role: 'Web Developer',
      company: 'Creative Agency',
      duration: 'Jun 2020 - Dec 2021',
      description: 'Worked on client websites, focusing on performance optimization and responsive design.',
    },
    {
      role: 'Intern Software Engineer',
      company: 'Innovate Labs',
      duration: 'Jul 2019 - May 2020',
      description: 'Assisted in developing internal tools and gained experience in full-stack development.',
    },
  ];

  return (
    <div className="bg-gray-900 text-white p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
      <div className="flex flex-col md:flex-row justify-between md:space-x-6">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className={`flex-1 bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 ${
              index !== 0 ? 'md:border-l md:border-gray-700' : ''
            }`}
          >
            <h3 className="text-xl font-semibold">{experience.role}</h3>
            <p className="text-sm text-gray-400">{experience.company} | {experience.duration}</p>
            <p className="mt-2">{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
