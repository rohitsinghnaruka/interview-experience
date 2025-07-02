import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* App Name / Logo */}
        <div className="text-lg font-semibold text-white">
          VNIT PrepConnect
        </div>

        {/* Footer Links */}
        <div className="flex space-x-6 text-sm">
          <Link to="/about" className="hover:text-white transition-colors">
            About
          </Link>
          <Link to="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
          <Link to="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-400 mt-2 md:mt-0">
          © 2025 VNIT PrepConnect
        </div>
      </div>
    </footer>
  );
};

export default Footer; // ✅ This line is important!
