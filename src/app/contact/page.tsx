import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
        <form className="max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 mb-4 rounded-lg border border-gray-300 text-gray-800"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 mb-4 rounded-lg border border-gray-300 text-gray-800"
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-3 mb-4 rounded-lg border border-gray-300 text-gray-800"
            rows={5}
          ></textarea>
          <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
