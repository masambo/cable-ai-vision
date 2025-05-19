
import React from 'react';
import { CheckCircle, XCircle, Clock } from 'lucide-react';

interface ResultDisplayProps {
  status: 'idle' | 'loading' | 'success' | 'error';
  result?: {
    label: string;
    confidence?: number;
  };
  error?: string;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ status, result, error }) => {
  if (status === 'idle') {
    return null;
  }

  return (
    <div className="mt-4">
      {status === 'loading' && (
        <div className="flex items-center gap-2 text-amber-500 animate-pulse-soft">
          <Clock className="h-5 w-5" />
          <span>Processing...</span>
        </div>
      )}
      
      {status === 'success' && result && (
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-green-600">
            <CheckCircle className="h-5 w-5" />
            <span className="font-medium">{result.label}</span>
          </div>
          {result.confidence !== undefined && (
            <div className="text-sm text-gray-500">
              Confidence: {(result.confidence * 100).toFixed(2)}%
            </div>
          )}
        </div>
      )}
      
      {status === 'error' && (
        <div className="flex items-center gap-2 text-red-500">
          <XCircle className="h-5 w-5" />
          <span>{error || 'An error occurred'}</span>
        </div>
      )}
    </div>
  );
};

export default ResultDisplay;
