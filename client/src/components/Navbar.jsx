import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, UserCircle } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // TODO: Clear token/localStorage
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-indigo-700">InterviewExperiences</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/dashboard" className="text-gray-700 hover:text-indigo-600 font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600 font-medium">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-indigo-600 font-medium">
              Contact
            </Link>
          </div>

          {/* Right User Icon */}
          <div className="relative">
            <button
              className="flex items-center focus:outline-none"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <UserCircle className="h-7 w-7 text-indigo-700" />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg border z-50">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
                  onClick={() => setDropdownOpen(false)}
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700">
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link to="/" className="block text-gray-700 hover:text-indigo-600">
            Home
          </Link>
          <Link to="/about" className="block text-gray-700 hover:text-indigo-600">
            About
          </Link>
          <Link to="/contact" className="block text-gray-700 hover:text-indigo-600">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
