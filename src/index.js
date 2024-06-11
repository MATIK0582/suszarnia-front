import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import { HomePage } from './pages/HomePage/home.page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);