
import React from 'react';
import { Network } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-cable-blue to-cable-darkBlue text-white py-12 md:py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-white/10 rounded-full">
            <Network className="h-10 w-10" />
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">CableSync AI</h1>
        <p className="text-lg md:text-xl text-gray-100 mb-6">
          AI-powered network cable identification for telecommunications professionals
        </p>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-200 text-sm md:text-base">
            Upload images of cables and connectors or describe wire color sequences to identify 
            cable types, connector types, and wiring standards. Perfect for network installations, 
            troubleshooting, and telecommunications engineering.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
