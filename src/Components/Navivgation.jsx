
import React from 'react'
import  { useState } from 'react';
import image1 from '../assets/Photo/coder.png'


export default function Navivgation() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gray-800 text-white p-5 ">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center">
        <img src={image1} alt="Logo" className="h-10 w-10 mr-3" />
        <span className="text-xl font-bold">Programmer Mike</span>
      </div>
      <div className="hidden md:flex space-x-4 text-2xl">
        <a href="#about" className="hover:text-gray-400">About</a>
        <a href="#projects" className="hover:text-gray-400">Projects</a>
        <a href="#contact" className="hover:text-gray-400">Contact</a>
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </div>
    </div>
    {isOpen && (
      <div className="md:hidden mt-4">
        <a href="#about" className="block px-2 py-1 hover:text-gray-400">About</a>
        <a href="#projects" className="block px-2 py-1 hover:text-gray-400">Projects</a>
        <a href="#contact" className="block px-2 py-1 hover:text-gray-400">Contact</a>
      </div>
    )}
  </nav>
  )
}



// src/Navbar.js


