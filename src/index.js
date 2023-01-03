import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './page/home';
import Result from './page/result';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/result' element={<Result />} />
    </Routes>
  </Router>
);

reportWebVitals();