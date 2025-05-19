
import React, { useState } from 'react';
import { AlignCenter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import IdentificationCard from './IdentificationCard';
import ResultDisplay from './ResultDisplay';
import { analyzeColorCode } from '@/services/aiService';
import { toast } from '@/components/ui/sonner';

const WiringStandardIdentifier: React.FC = () => {
  const [colorText, setColorText] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [result, setResult] = useState<{ label: string; confidence: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!colorText.trim()) {
      toast.error("Please enter a color sequence");
      return;
    }

    setStatus('loading');
    setResult(null);
    setError(null);

    try {
      const aiResult = await analyzeColorCode(colorText);
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
      title="Wiring Standard Identifier"
      description="Enter the color sequence of your wire (e.g., 'orange-white, orange, green-white, blue')."
      icon={<AlignCenter className="h-5 w-5 text-cable-blue" />}
      footer={
        <Button 
          onClick={handleAnalyze} 
          className="w-full bg-cable-blue hover:bg-cable-darkBlue"
          disabled={!colorText.trim() || status === 'loading'}
        >
          Identify Wiring Standard
        </Button>
      }
    >
      <div className="space-y-4">
        <Textarea
          value={colorText}
          onChange={(e) => setColorText(e.target.value)}
          placeholder="e.g., orange-white, orange, green-white, blue, blue-white, green, brown-white, brown"
          className="resize-none h-32"
        />
        <div className="text-xs text-gray-500">
          <p>Example inputs:</p>
          <ul className="list-disc ml-4 space-y-1">
            <li>T568B: orange-white, orange, green-white, blue...</li>
            <li>T568A: green-white, green, orange-white, blue...</li>
          </ul>
        </div>
        <ResultDisplay status={status} result={result || undefined} error={error || undefined} />
      </div>
    </IdentificationCard>
  );
};

export default WiringStandardIdentifier;
