"use client"
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Import icons from lucide-react

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/">
          <span className="text-2xl font-bold cursor-pointer">Loan Portal</span>
        </Link>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Links */}
        <div
          className={` absolute top-16 left-0 w-full  md:static md:flex md:space-x-6 md:items-center md:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 py-4 md:py-0">
          <li>
              <Link href="/LandingPage">
                <span className="hover:text-yellow-300 text-black cursor-pointer">
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href="/dashboard">
                <span className="hover:text-yellow-300 text-black cursor-pointer">
                Dashboard
                </span>
              </Link>
            </li>
            <li>
              <Link href="/loan-request-form">
                <span className="hover:text-yellow-300 text-black cursor-pointer">
                Loan Request Form
                </span>
              </Link>
            </li>
            <li>
              <Link href="/calculator">
                <span className="hover:text-yellow-300 text-black cursor-pointer">
                Calculator
                </span>
              </Link>
            </li>
            
          </ul>

          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 px-4 md:px-0">
            <Link href="/login">
              <span className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition-all">
                Login
              </span>
            </Link>
            {/* <li><Link to="/login" className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition-all">login</Link></li> */}
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
