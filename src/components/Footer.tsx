
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white shadow-sm border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="text-center text-sm text-cable-gray">
          <p>CableSync AI &copy; {new Date().getFullYear()} | Network Cable Identification Tool</p>
          <p className="mt-1">Powered by Hugging Face Inference API</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
