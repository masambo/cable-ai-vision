
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import CableTypeIdentifier from '@/components/CableTypeIdentifier';
import ConnectorTypeIdentifier from '@/components/ConnectorTypeIdentifier';
import WiringStandardIdentifier from '@/components/WiringStandardIdentifier';
import ApiKeyManager from '@/components/ApiKeyManager';
import { Toaster as Sonner } from '@/components/ui/sonner';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection />
      
      <main className="flex-grow px-4 py-8 max-w-7xl mx-auto w-full">
        <div className="mb-8">
          <ApiKeyManager />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CableTypeIdentifier />
          <ConnectorTypeIdentifier />
          <WiringStandardIdentifier />
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-cable-blue mb-4 text-center">How It Works</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              CableSync AI uses advanced image recognition technology to identify network cables and connectors
              from uploaded images. Our system is trained on thousands of telecommunications equipment images to
              provide accurate identification.
            </p>
            <p>
              For wiring standards, our natural language processing algorithm analyzes color sequence descriptions
              to determine the standard being used. This helps ensure proper cable termination and compatibility.
            </p>
            <p>
              This tool is designed for telecommunications professionals, network technicians, and engineering
              students as a quick reference guide for cable identification in the field or during installation.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
      <Sonner />
    </div>
  );
};

export default Index;
