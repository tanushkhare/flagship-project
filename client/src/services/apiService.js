// src/services/apiService.js

export const apiRequest = async (endpoint, method) => {
  const url = `http://localhost:8000${endpoint}`;
  
  const response = await fetch(url, {
    method: method,
    headers: { 
      'Content-Type': 'application/json' 
    }
  });
  
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  
  return await response.json();
};