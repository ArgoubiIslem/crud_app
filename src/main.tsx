import React from 'react';
import { createRoot } from 'react-dom/client';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import App from './App';

const container = document.getElementById('root');
  // Call the element loader after the platform has been bootstrapped
  defineCustomElements(window);
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

);