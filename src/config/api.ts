// API Configuration
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000',
  TIMEOUT: 10000, // 10 seconds
};

// You can set your backend URL by adding VITE_API_BASE_URL to your environment
// For now, it defaults to localhost:5000
// Example: VITE_API_BASE_URL=https://your-backend-url.com