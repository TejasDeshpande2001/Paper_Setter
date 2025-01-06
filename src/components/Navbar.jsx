import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-lg font-bold">
            Question Paper Generator
          </div>
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive ? "bg-blue-800" : "hover:bg-blue-700"
                }`
              }
            >
              Add Questions
            </NavLink>
            <NavLink
              to="/saved-questions"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive ? "bg-blue-800" : "hover:bg-blue-700"
                }`
              }
            >
              Saved Questions
            </NavLink>
            <NavLink
              to="/select-questions"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive ? "bg-blue-800" : "hover:bg-blue-700"
                }`
              }
            >
              Select Questions
            </NavLink>
            <NavLink
              to="/generate-paper"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive ? "bg-blue-800" : "hover:bg-blue-700"
                }`
              }
            >
              Generate Paper
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;







