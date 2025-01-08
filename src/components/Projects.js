import React, { useState } from 'react';

const Projects = () => {
  // State for toggling project details
  const [showDetails, setShowDetails] = useState([false, false, false]);

  // Toggle function to show/hide details for a specific project
  const toggleDetails = (index) => {
    const newShowDetails = [...showDetails];
    newShowDetails[index] = !newShowDetails[index];
    setShowDetails(newShowDetails);
  };

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">My Projects</h2>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out">
          {/* Project 1 */}
          <div className="project-card p-6 bg-white border border-gray-200  hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out">
            <img
              src="./images/image.png"
              alt="Project 1"
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold mb-2">Contact Manager</h3>
            <p className="mb-4">A smart address book that helps you manage and sync your contacts.</p>
            <button
              onClick={() => toggleDetails(0)}
              className="px-4 py-2 bg-blue-500 text-white rounded shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out"
            >
              {showDetails[0] ? 'Show Less' : 'More Details'}
            </button>
            {showDetails[0] && (
              <div className="mt-4">
                <ul>
                  <li>Managed and updated comprehensive contact databases</li>
                  <li>Facilitated seamless communication between clients</li>
                  <li>Supported outreach efforts</li>
                </ul>
              </div>
            )}
          </div>

          {/* Project 2 */}
          <div className="project-card p-6 border border-gray-200 bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out">
            <img
              src="./images/simplelender.png"
              alt="Project 2"
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold mb-2">Simple Lender</h3>
            <p className="mb-4">A loan management system with user authentication and loan tracking.</p>
            <button
              onClick={() => toggleDetails(1)}
              className="px-4 py-2 bg-blue-500 text-white rounded
               shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out"
            >
              {showDetails[1] ? 'Show Less' : 'More Details'}
            </button>
            {showDetails[1] && (
              <div className="mt-4">
                <ul>
                  <li>Developed frontend using React</li>
                  <li>Managed data storage with MySQL</li>
                  <li>Implemented secure user authentication</li>
                </ul>
              </div>
            )}
          </div>

          {/* Project 3 */}
        
        
          <div className="project-card p-6 bg-white border border-gray-200 bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out">
            <img
              src="./images/bookstore.png"
              alt="Project 3"
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold mb-2">BookStore</h3>
            <p className="mb-4">Designed and developed a responsive UI for an online bookstore using HTML, CSS, and JavaScript..</p>
            <button
              onClick={() => toggleDetails(2)}
              className="px-4 py-2 bg-blue-500 text-white rounded 
               shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out"
            >
              {showDetails[2] ? 'Show Less' : 'More Details'}
            </button>
            {showDetails[2] && (
              <div className="mt-4">
                <ul>
                  <li>HTML5, CSS3, JavaScript, React.js, Tailwind css, Git.
                  .</li>
                  <li>Implemented responsive design, dynamic search, and custom UI components</li>
                  
                </ul>
              </div>
            )}
          </div>


          <div className="project-card p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out">
            <img
              src="./images/linkedin.png"
              alt="Project 3"
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold mb-2">Linkedin Clone</h3>
            <p className="mb-4">Built a LinkedIn clone using ReactJS and Redux, replicating features like profile management, posts, and messaging. Improved UI performance and optimized load times for better user experience..</p>
            <button
              onClick={() => toggleDetails(2)}
              className="px-4 py-2 bg-blue-500 text-white rounded shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out"
            >
              {showDetails[2] ? 'Show Less' : 'More Details'}
            </button>
            {showDetails[2] && (
              <div className="mt-4">
                <ul>
                  <li>ReactJS, Redux, Bootstrap, JavaScript, LocalStorage.</li>
                  <li>eveloped a LinkedIn clone with features like profile management, posts, and messaging, ensuring seamless performance and data persistence.</li>

                </ul>
              </div>
            )}
          </div>

          <div className="project-card p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out">
            <img
              src="./images/lamasocial.png"
              alt="Project 3"
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold mb-2">Lamasocial</h3>
            <p className="mb-4">Lamasocial is a platform that helps people connect and work together. It focuses on creating meaningful interactions and shared interests..</p>
            <button
              onClick={() => toggleDetails(2)}
              className="px-4 py-2 bg-blue-500 text-white rounded shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out"
            >
              {showDetails[2] ? 'Show Less' : 'More Details'}
            </button>
            {showDetails[2] && (
              <div className="mt-4">
                <ul>
                  <li>Lamasocial uses ReactJS, Tailwind CSS, React Router, and React Icons for a dynamic, responsive, and user-friendly interface.</li>
                
                </ul>
              </div>
            )}
          </div>

          <div className="project-card p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out">
            <img
              src="./images/portfolio.png"
              alt="Project 3"
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold mb-2">Portfolio</h3>
            <p className="mb-4">A portfolio project is a personal project that showcases your skills and expertise in a specific field..</p>
            <button
              onClick={() => toggleDetails(2)}
              className="px-4 py-2 bg-blue-500 text-white rounded shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out"
            >
              {showDetails[2] ? 'Show Less' : 'More Details'}
            </button>
            {showDetails[2] && (
              <div className="mt-4">
                <ul>
                  <li>Frontend Technologies: HTML, CSS, JavaScript, React, Vue, Tailwind CSS.</li>
                  <li>Deployment Tools: GitHub, Netlify.</li>
                 
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
