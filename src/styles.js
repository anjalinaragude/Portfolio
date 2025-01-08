import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
  }
  nav {
    background-color: #333;
    padding: 10px;
  }
  nav ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
  }
  nav a {
    color: white;
    text-decoration: none;
  }
  section {
    padding: 20px;
    margin: 20px 0;
  }
  .projects {
    display: flex;
    flex-wrap: wrap;
  }
  .project {
    margin: 10px;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ddd;
  }
  footer {
    text-align: center;
    padding: 10px;
    background-color: #333;
    color: white;
  }
    /* Global Styles for the section */
#skills {
  padding: 20px;
  background-color: #f4f4f4;
}

h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.skills-card {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 250px; /* Default width for larger screens */
  text-align: center;
}

.skills-card h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
}

.skills-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.skill-button {
  background-color: #007BFF;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.skill-button:hover {
  background-color: #0056b3;
}

/* Media Queries for Mobile Responsiveness */
@media (max-width: 768px) {
  .skills-list {
    flex-direction: column;
    align-items: center;
  }

  .skills-card {
    width: 90%; /* More space for each card on mobile */
    margin-bottom: 20px;
  }

  h2 {
    font-size: 1.8rem; /* Smaller title size on mobile */
  }
}

@media (max-width: 480px) {
  .skills-list {
    padding: 0;
  }

  .skills-card {
    width: 100%; /* Make cards take full width on very small screens */
  }

  .skill-button {
    font-size: 0.9rem;
    padding: 8px;
  }
}

`;
