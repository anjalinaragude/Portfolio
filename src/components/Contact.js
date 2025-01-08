import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Contact Me</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-lg font-medium">Your Name</label>
            <input type="text" className="w-full p-2 border rounded-lg" />
          </div>
          <div>
            <label className="block text-lg font-medium">Email Address</label>
            <input type="email" className="w-full p-2 border rounded-lg" />
          </div>
          <div>
            <label className="block text-lg font-medium">Message</label>
            <textarea className="w-full p-2 border rounded-lg" rows="5"></textarea>
          </div>
          <button className="w-full py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
