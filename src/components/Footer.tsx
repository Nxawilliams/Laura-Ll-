import React from 'react';
import { Phone, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-color text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
        <div className="flex flex-wrap justify-center space-x-4 mb-4">
          <a href="https://wa.me/12468323860" className="flex items-center hover:text-accent-color mb-2">
            <Phone className="w-5 h-5 mr-2" />
            +1 (246) 832-3860
          </a>
          <a href="mailto:laudablelearning@gmail.com" className="flex items-center hover:text-accent-color mb-2">
            <Mail className="w-5 h-5 mr-2" />
            laudablelearning@gmail.com
          </a>
          <a href="https://www.instagram.com/laudablelearning" className="flex items-center hover:text-accent-color mb-2">
            <Instagram className="w-5 h-5 mr-2" />
            @laudablelearning
          </a>
        </div>
        <div className="flex justify-center space-x-4 mb-4">
          <img src="/path/to/cooperation-icon.png" alt="Cooperation" className="w-8 h-8" />
          <img src="/path/to/confidence-icon.png" alt="Confidence" className="w-8 h-8" />
          <img src="/path/to/independent-thinking-icon.png" alt="Independent Thinking" className="w-8 h-8" />
        </div>
        <p>&copy; 2023 Laudable Learning. All rights reserved.</p>
        <p className="mt-2">Empowering children through personalized education and skill development.</p>
      </div>
    </footer>
  );
};

export default Footer;