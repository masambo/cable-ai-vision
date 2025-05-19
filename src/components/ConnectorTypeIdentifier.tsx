
import React, { useState } from 'react';
import { Plug } from 'lucide-react';
import { Button } from '@/components/ui/button';
import IdentificationCard from './IdentificationCard';
import ImageUploader from './ImageUploader';
import ResultDisplay from './ResultDisplay';
import { analyzeImage } from '@/services/aiService';
import { toast } from '@/components/ui/sonner';

const ConnectorTypeIdentifier: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [result, setResult] = useState<{ label: string; confidence: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleImageSelected = (selectedFile: File) => {
    setFile(selectedFile);
    setStatus('idle');
    setResult(null);
    setError(null);
  };

  const handleAnalyze = async () => {
    if (!file) {
      toast.error("Please upload an image first");
      return;
    }

    setStatus('loading');
    setResult(null);
    setError(null);

    try {
      const aiResult = await analyzeImage(file, 'connector');
      setResult(aiResult);
      setStatus('success');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      setError(errorMessage);
      setStatus('error');
      toast.error(errorMessage);
    }
  };

  return (
    <IdentificationCard
      title="Connector Type Identifier"
      description="Upload an image of a network connector to identify its type."
      icon={<Plug className="h-5 w-5 text-cable-blue" />}
      footer={
        <Button 
          onClick={handleAnalyze} 
          className="w-full bg-cable-blue hover:bg-cable-darkBlue"
          disabled={!file || status === 'loading'}
        >
          Identify Connector Type
        </Button>
      }
    >
      <div className="space-y-4">
        <ImageUploader onImageSelected={handleImageSelected} />
        <ResultDisplay status={status} result={result || undefined} error={error || undefined} />
      </div>
    </IdentificationCard>
  );
};

export default ConnectorTypeIdentifier;
