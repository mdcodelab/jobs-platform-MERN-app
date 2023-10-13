import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "normalize.css"
import { AppContextProvider } from './context/appContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </AppContextProvider>
);
