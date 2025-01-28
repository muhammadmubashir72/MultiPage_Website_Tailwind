import React from "react";
import Hero from "./component/hero";
import About from "./about/page";
import Services from "./services/page";
import Contact from "./contact/page";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Hero />
      <About />
      <Services />
      <Contact />
    </div>
  );
}
