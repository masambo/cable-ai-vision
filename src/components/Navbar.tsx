
import React from 'react';
import { Network } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Network className="h-8 w-8 text-cable-blue" />
            <div className="ml-2">
              <h1 className="text-xl font-bold text-cable-blue">CableSync AI</h1>
              <p className="text-xs text-cable-gray">Network Cable Identification</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
