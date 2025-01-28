import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="bg-blue-500 text-white py-24 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold mb-6">Welcome to My Awesome Website</h2>
        <p className="text-xl mb-8">We provide innovative solutions to help your business thrive in the digital world.</p>
        <button className="px-8 py-3 bg-white text-blue-500 font-bold rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
}
