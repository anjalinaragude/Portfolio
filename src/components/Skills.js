import React from 'react';

const Skills = () => {
  // Skills data
  const skillsData = [
    { category: 'Frontend', skills: ['React', 'JavaScript', 'HTML/CSS', 'React-Router', 'Redux'] },
    { category: 'Backend', skills: ['Node.js'] },
    { category: 'Database', skills: ['MySQL'] },
    { category: 'Other', skills: ['GitHub', 'Core Java', 'Selenium', 'Maven', 'TestNG'] },
  ];

  return (
    <section id="skills" className="py-16 bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out">
      <div className="max-w-screen-xl mx-auto px-4 bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out">
        <h2 className="text-3xl font-semibold text-center mb-8">Skills</h2>

        {/* Skills list container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((item, index) => (
            <div
              key={index}
              className="skills-card bg-white p-6 border border-gray-200 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out"
            >
              <h3 className="text-xl font-semibold mb-4">{item.category}</h3>
              <div className="skills-tags flex flex-wrap gap-2">
                {item.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="skill-tag py-2 px-4 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 

export default Skills;
