import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter here
import './index.css';
import App from './App.jsx'; // Import App

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>  {/* Only wrap App here */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
