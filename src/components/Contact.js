// Contact.js
import React, { useState } from 'react';
import '../assets/styles/Contact.css';

const Contact = () => {
  // State to track the form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Check if all fields are filled
    if (name && email && message) {
      // Display success alert
      alert('Message sent successfully!');
      
      // Clear form fields after successful submission
      setName('');
      setEmail('');
      setMessage('');
    } else {
      // Display error if any field is empty
      alert('Please fill in all fields!');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>Feel free to reach out to me through any of the channels below:</p>

      {/* Card container for contact form */}
      <div className="contact-card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)} // Update state on input change
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update state on input change
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)} // Update state on input change
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
