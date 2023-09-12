import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { DarkModeContextProvider } from './context/DarkMode';
import { AuthContextProvider } from './context/Authorization';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <AuthContextProvider>
      <App/>
      </AuthContextProvider>
    </DarkModeContextProvider>
    
  </React.StrictMode>
);


