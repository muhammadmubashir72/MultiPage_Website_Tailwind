import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">About Us</h2>
        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
          We are a team of dedicated professionals committed to delivering top-notch digital services.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <Card title="Our Mission" description="To empower businesses with innovative digital solutions." />
          {/* Vision */}
          <Card title="Our Vision" description="To be a global leader in digital transformation services." />
          {/* Values */}
          <Card title="Our Values" description="Innovation, Integrity, and Excellence." />
        </div>
      </div>
    </section>
  );
}

function Card({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 shadow-lg rounded-lg bg-gray-50">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
