import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

/**
 * Application Entry Point
 * Renders the React application into the DOM
 * StrictMode enables additional development checks and warnings
 */

// Get the root DOM element where the React app will be mounted
const rootElement = document.getElementById('root');

// Create a React root and render the app with StrictMode enabled
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);