import React from 'react';
import { createRoot } from 'react-dom/client'; // Changed import
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import App from './App';
import reportWebVitals from './reportWebVitals';

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE
};

const Root = () => (
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>
);

const rootElement = document.getElementById('root');

createRoot(rootElement).render( // Changed createRoot usage
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

reportWebVitals();
