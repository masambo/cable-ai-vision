
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Key } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

const LOCAL_STORAGE_API_KEY = 'cablesync-api-key';

export const useApiKey = () => {
  const [apiKey, setApiKey] = useState<string | null>(null);

  useEffect(() => {
    // Load API key from local storage on component mount
    const storedKey = localStorage.getItem(LOCAL_STORAGE_API_KEY);
    if (storedKey) {
      setApiKey(storedKey);
    }
  }, []);

  const saveApiKey = (key: string) => {
    localStorage.setItem(LOCAL_STORAGE_API_KEY, key);
    setApiKey(key);
  };

  const clearApiKey = () => {
    localStorage.removeItem(LOCAL_STORAGE_API_KEY);
    setApiKey(null);
  };

  return { apiKey, saveApiKey, clearApiKey };
};

const ApiKeyManager: React.FC = () => {
  const { apiKey, saveApiKey, clearApiKey } = useApiKey();
  const [inputValue, setInputValue] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    if (!inputValue.trim()) {
      toast.error('Please enter a valid API key');
      return;
    }
    
    saveApiKey(inputValue.trim());
    setIsEditing(false);
    toast.success('API key saved successfully');
  };

  const handleClear = () => {
    clearApiKey();
    setInputValue('');
    toast.success('API key removed');
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
      <div className="flex items-center mb-2">
        <Key className="h-5 w-5 text-cable-blue mr-2" />
        <h3 className="text-lg font-medium">API Key Management</h3>
      </div>
      
      {!isEditing && apiKey ? (
        <div className="space-y-3">
          <p className="text-sm text-gray-500">
            API key is set and securely stored in your browser.
          </p>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setIsEditing(true)}
            >
              Change Key
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleClear}
            >
              Remove Key
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <p className="text-sm text-gray-500">
            Enter your API key to enable AI identification features.
          </p>
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter your API key"
              type="password"
              className="flex-1"
            />
            <Button onClick={handleSave}>Save</Button>
          </div>
          <p className="text-xs text-gray-400">
            Your API key is stored locally in your browser and never sent to our servers.
          </p>
        </div>
      )}
    </div>
  );
};

export default ApiKeyManager;
