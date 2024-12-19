import React, { useState } from 'react';
import '../assets/styles/About.css'; // Make sure to have the relevant CSS file

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setShowMore(!showMore);
  };

  return (
    <section id="about">
      <h2>About Me</h2>
      <img src="./images/anjali.jpg" alt="Profile" /> {/* Replace with your image */}
      <p>
        Hi, I'm Anjali Naragude, i have completed graduation  in CSE, a passionate web developer with experience in building dynamic and responsive websites.
      </p>
      
      {/* Display more information only if `showMore` is true */}
      {showMore && (
        <div className="more-info">
          <p>
            I specialize in software  development and also software testing and have worked with technologies such as React,JavaScript,HTML,CSS,MySQL,React Router,Redux and Selenium with java,core java,Testng. 
            I enjoy solving problems and continuously learning new technologies. When I’m not coding, I enjoy photography and traveling.
          </p>
        </div>
      )}

      <button className="more-about-btn" onClick={handleClick}>
        {showMore ? "Show Less" : "More About Me"}
      </button>
    </section>
  );
};

export default About;
