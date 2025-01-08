import React, { useState } from 'react';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';


const About = () => {
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setShowMore(!showMore);
  };

  return (
    <section id="about" className="py-16 ">
      <div className="max-w-screen-xl mx-auto px-4 mt-5 bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out">
        {/* Profile Image */}
        <div className="text-center mb-8 ">
          <img src="./images/anjali.jpg" alt="Profile" className="rounded-full mx-auto w-40 h-40 object-cover mt-4 bg-white  shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out" />
        </div>

        {/* Content */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-lg mb-4">
            Hi, I'm Anjali Naragude, I have completed my graduation in CSE, and I am a passionate web developer.
          </p>

          {/* Display more information only if `showMore` is true */}
          {showMore && (
            <div className="more-info mb-4">
              <p>
                I specialize in software development and also software testing, having worked with technologies such as React, JavaScript, HTML, CSS, MySQL, React Router, Redux, and Selenium with Java, Core Java, and TestNG.
              </p>
            </div>
          )}

          <button onClick={handleClick} className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full  shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out">
            {showMore ? "Show Less" : "More About Me"}
          </button>

          {/* Download CV Button */}
          <div className="mt-6">
            <p className="mb-2">Want to know more about my experience? Download my CV below:</p>
            <a href="/images/Resume1.pdf" download>
              <button className="px-6 py-2 bg-green-500 text-white rounded-full mb-4 shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out">Download CV</button>
            </a>
          </div>
        </div>
      </div>
      <Projects/>
      <Skills/>
      <Contact/>
    </section>
  );
};

export default About;
