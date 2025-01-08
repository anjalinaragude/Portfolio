import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter here

ReactDOM.render(
  <BrowserRouter>  {/* Wrap your app in BrowserRouter here */}
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
