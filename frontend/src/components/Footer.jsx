import React from 'react';
import { QrCode, Github, Linkedin } from 'lucide-react';

const Footer = () => (
  <footer className="bg-white border-t border-gray-200">
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <QrCode className="h-6 w-6 text-blue-600" />
          <span className="ml-2 text-gray-700 font-medium">QR Baggage System</span>
        </div>
        
        <div className="flex space-x-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
        
        <div className="mt-4 md:mt-0 text-sm text-gray-500">
          © {new Date().getFullYear()} QR Baggage System. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
  