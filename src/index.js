import React from 'react';
import { createRoot } from 'react-dom'; // Import createRoot from react-dom
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Use createRoot to render your application
const root = createRoot(document.getElementById('root')); // Replace 'root' with your root element ID
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
