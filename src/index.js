import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Shoping from './context/Shoping';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Shoping>
      <App />
    </Shoping>


  </React.StrictMode>
);

