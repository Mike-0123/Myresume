// src/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Contact and Social Media Section */}
          <div className="md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Contact & Social Media</h3>
            <p className="mb-2">Email: michelitwitaho@gmail.com</p>
            <p>Phone: +250 782230807</p>
            <div className="mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mr-4"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline mr-4"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:underline"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* About Me Section */}
          <div className="md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">About Me</h3>
            <p>
              I am a passionate developer dedicated to creating innovative and efficient solutions. With experience in web development, I strive to bring unique ideas to life and make a positive impact through technology.
            </p>
          </div>

          {/* Additional Details Section */}
          <div className="md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Additional Information</h3>
            <p className="mb-2">© 2024 Your Company. All rights reserved.</p>
            <p>Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
