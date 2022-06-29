import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import { NewsContextProvider } from './NewsContext';
import News from './components/News';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NewsContextProvider>
      <Navbar />
      <Home />
      <News />
      </NewsContextProvider>
);

