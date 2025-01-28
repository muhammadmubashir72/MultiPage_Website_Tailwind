import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <p className="text-sm">&copy; 2025 My Awesome Website. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="#" className="hover:underline">
          <FaFacebook size={24} />
        </a>
        <a href="#" className="hover:underline">
          <FaTwitter size={24} />
        </a>
        <a href="#" className="hover:underline">
          <FaInstagram size={24} />
        </a>
      </div>
    </footer>
  );
}
