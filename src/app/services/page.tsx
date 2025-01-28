import React from 'react';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <ServiceCard title="Web Development" description="Crafting responsive and dynamic websites tailored to your needs." />
          <ServiceCard title="UI/UX Design" description="Designing user-friendly interfaces with a focus on aesthetics and functionality." />
          <ServiceCard title="Digital Marketing" description="Enhancing your online presence through targeted marketing strategies." />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-8 bg-white shadow-lg rounded-lg">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
