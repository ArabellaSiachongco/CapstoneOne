import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter here
import './index.css';
import App from './App.jsx'; // Import App
import ContextProvider from './components/user_dashboard/AI/context/Context.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ContextProvider>
    <BrowserRouter>  {/* Only wrap App here */}
      <App />
    </BrowserRouter>
  </ContextProvider>
  </StrictMode>
);
