// src/WhatsAppButton.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+250 782230807"  // Replace with your WhatsApp number
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
