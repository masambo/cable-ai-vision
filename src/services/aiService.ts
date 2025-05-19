
// AI service with API key support

export interface AiResponse {
  label: string;
  confidence: number;
}

const getApiKey = (): string | null => {
  return localStorage.getItem('cablesync-api-key');
};

// Mock function to simulate image analysis with delay and API key validation
export const analyzeImage = async (
  imageFile: File,
  type: 'cable' | 'connector'
): Promise<AiResponse> => {
  // In a real app, we would send the image to an API with the API key
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        // Check for API key
        const apiKey = getApiKey();
        if (!apiKey) {
          throw new Error('API key not found. Please add your API key in settings.');
        }
        
        // Check if file is valid
        if (!imageFile || !imageFile.type.startsWith('image/')) {
          throw new Error('Please upload a valid image file');
        }
        
        console.log(`Using API key: ${apiKey.substring(0, 5)}... for analysis`);
        
        // Simulate response based on type
        if (type === 'cable') {
          const cables = [
            { label: 'Ethernet (Cat5e)', confidence: 0.9234 },
            { label: 'Ethernet (Cat6)', confidence: 0.8756 },
            { label: 'Coaxial', confidence: 0.9123 },
            { label: 'Fiber Optic', confidence: 0.8832 },
            { label: 'HDMI', confidence: 0.9045 },
            { label: 'USB-C', confidence: 0.8976 }
          ];
          const randomIndex = Math.floor(Math.random() * cables.length);
          resolve(cables[randomIndex]);
        } else {
          const connectors = [
            { label: 'RJ45', confidence: 0.9123 },
            { label: 'F-Type', confidence: 0.8634 },
            { label: 'LC (Fiber)', confidence: 0.9045 },
            { label: 'SC (Fiber)', confidence: 0.8756 },
            { label: 'HDMI', confidence: 0.9234 },
            { label: 'DisplayPort', confidence: 0.8543 }
          ];
          const randomIndex = Math.floor(Math.random() * connectors.length);
          resolve(connectors[randomIndex]);
        }
      } catch (error) {
        reject(error instanceof Error ? error : new Error('Unknown error occurred'));
      }
    }, 1500); // Simulate network delay
  });
};

// Mock function to analyze color code text with API key validation
export const analyzeColorCode = async (colorText: string): Promise<AiResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        // Check for API key
        const apiKey = getApiKey();
        if (!apiKey) {
          throw new Error('API key not found. Please add your API key in settings.');
        }
        
        // Check if input is valid
        if (!colorText.trim()) {
          throw new Error('Please enter a color sequence');
        }
        
        console.log(`Using API key: ${apiKey.substring(0, 5)}... for color analysis`);
        
        const lowerText = colorText.toLowerCase();
        
        // Simple pattern matching (in a real app, this would be NLP-based)
        if (lowerText.includes('orange') && lowerText.includes('green') && lowerText.includes('blue')) {
          if (lowerText.indexOf('orange') < lowerText.indexOf('green')) {
            resolve({ label: 'T568B Standard', confidence: 0.92 });
          } else {
            resolve({ label: 'T568A Standard', confidence: 0.89 });
          }
        } else if (lowerText.includes('red') && lowerText.includes('black')) {
          resolve({ label: 'Telephony Standard', confidence: 0.87 });
        } else if (lowerText.includes('blue') && lowerText.includes('brown')) {
          resolve({ label: 'Crossover Cable', confidence: 0.85 });
        } else {
          resolve({ label: 'Non-standard Configuration', confidence: 0.73 });
        }
      } catch (error) {
        reject(error instanceof Error ? error : new Error('Unknown error occurred'));
      }
    }, 1000); // Simulate network delay
  });
};
