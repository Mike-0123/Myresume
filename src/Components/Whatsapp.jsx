// src/WhatsAppButton.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppButton = () => {
    const message = encodeURIComponent("Hello, I want to discuss a project with you.");

  return (
    <a
    href={`https://wa.me/250782230807?text=${message}`}  // Replace with your Rwandan WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600"
      aria-label="WhatsApp"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="text-white text-2xl" />
    </a>
  );
};

export default WhatsAppButton;
