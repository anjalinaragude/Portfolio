import React from 'react';
import '../assets/styles/Skills.css'; // For styling

const Skills = () => {
  // Skills data
  const skillsData = [
    { category: "Frontend", skills: ["React", "JavaScript", "HTML/CSS","React-Router","Redux"] },
    { category: "Backend", skills: ["Node.js"] },
    { category: "Database", skills: [ "MySQL"] },
    { category: "Other", skills: ["GitHub"," core java","selenium","Maven","TestNG"] }
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>

      <div className="skills-list">
        {skillsData.map((item, index) => (
          <div key={index} className="skills-card">
            <h3>{item.category}</h3>
            <div className="skills-buttons">
              {item.skills.map((skill, skillIndex) => (
                <button key={skillIndex} className="skill-button">
                  {skill}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
