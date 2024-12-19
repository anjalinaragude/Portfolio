import React, { useState } from 'react';
import '../assets/styles/Projects.css'; // For styling

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
    <section id="projects">
      <h2>My Projects</h2>

      {/* Project 1 */}
      <div className="project-card">
        <h3>Contact Manager</h3>
        <p>The contact manager  is a smart address book, that will help you to keep your contacts in one place .</p>
        <p>Contact  book can be synchronized with your contact list & every newly added contact will automatically  be synchronized with the list & easy contact backup &recovery.</p>
        
        {/* More details toggle */}
        <button className="more-details-btn" onClick={() => toggleDetails(0)}>
          {showDetails[0] ? "Show Less" : "More Details"}
        </button>

        {/* Conditionally render more details */}
        {showDetails[0] && (
          <div className="project-details">
            <li>Managed and Updated comprehensive contact Databases to  ensure accuracy and accessibility</li>
            <li>Facilited seamless commumication between clients ,stakeholder, and internal teams</li>
            <li>Strenthened client relationships and supported outreach efforts</li>
           
          </div>
        )}
      </div>

      {/* Project 2 */}
      <div className="project-card">
        <h3>Project2 : Simple Lender</h3>
        <p>A Straightforward lender project involves creating a system for loan management.</p>
        <p>
          it employs technologies link ReaqctJs for the frontend , Spring Boot for the backend , and  MySQL for data storage.
        </p>
        <p>The Project includes features such as user authentication,loan application handling ,approval processes ,and repayment tracking ,providing a seamless experience for both borrowers and lenders</p>
        
        {/* More details toggle */}
        <button className="more-details-btn" onClick={() => toggleDetails(1)}>
          {showDetails[1] ? "Show Less" : "More Details"}
        </button>

        {/* Conditionally render more details */}
        {showDetails[1] && (
          <div className="project-details">
            <li> Designed and developed the frontend using ReaqctJs,ensuring a responsive and user-friendly interface.</li>
            <li>Developed Database schemas and managed data storage using MySQL for secure and reliable operations</li>
  
          </div>
        )}
      </div>

   

      {/* Add more projects here */}
    </section>
  );
};

export default Projects;
