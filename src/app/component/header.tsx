"use client";
import Link from 'next/link';
import React, { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Website Title */}
        <h1 className="text-3xl font-extrabold">My Awesome Website</h1>

        {/* Hamburger and Close Icons */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '×' : '☰'}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } absolute top-16 left-0 w-full bg-blue-600 md:static md:block md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 text-lg">
            <li>
              <Link
                href="/"
                className="block px-4 py-2 hover:underline md:px-0 md:py-0"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block px-4 py-2 hover:underline md:px-0 md:py-0"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="block px-4 py-2 hover:underline md:px-0 md:py-0"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block px-4 py-2 hover:underline md:px-0 md:py-0"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
