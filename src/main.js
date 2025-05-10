import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';  // Update to App.jsx since you renamed it
import './index.css';         // Optional: Tailwind or other styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
