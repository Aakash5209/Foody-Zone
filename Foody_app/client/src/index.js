import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root');
const rootElement = ReactDOM.createRoot(root);

rootElement.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
