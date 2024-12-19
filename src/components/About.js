import React, { useState } from 'react';
import '../assets/styles/About.css'; // Make sure to have the relevant CSS file

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setShowMore(!showMore);
  };

  return (
    <section id="about">
      <div className="about-container">
        {/* Profile Image */}
        <div className="profile-image">
          <img src="./images/anjali.jpg" alt="Profile" />
        </div>

        {/* Content */}
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Hi, I'm Anjali Naragude, I have completed my graduation in CSE, and I am a passionate web developer with experience in building dynamic and responsive websites.
          </p>
          
          {/* Display more information only if `showMore` is true */}
          {showMore && (
            <div className="more-info">
              <p>
                I specialize in software development and also software testing, having worked with technologies such as React, JavaScript, HTML, CSS, MySQL, React Router, Redux, and Selenium with Java, Core Java, and TestNG.
                I enjoy solving problems and continuously learning new technologies. When I’m not coding, I enjoy photography and traveling.
              </p>
            </div>
          )}

          <button className="more-about-btn" onClick={handleClick}>
            {showMore ? "Show Less" : "More About Me"}
          </button>

          {/* Download CV Button */}
          <div className="cv-section">
            <p>Want to know more about my experience? Download my CV below:</p>
            <a href="/images/Resume-anjali.pdf" download>
              <button className="download-cv-btn">Download CV</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
