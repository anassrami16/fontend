import React from 'react';
import ReactDOM from 'react-dom';


import App from './App';

import Accueil from './Accueil';
import Presentation from './Presentation';
import Connecter from './Connecter';
import Inscription from './Inscription';

import {BrowserRouter, Routes, Route} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
          <Routes>
            <Route path="/presentation" element={<Presentation />} />
            <Route path="/inscription" element={<Inscription />} />
            <Route path="/connecter" element={<Connecter />} />
            <Route path="/decouvrir" element={<App />} />
            <Route path="/" element={<Accueil />} />
          </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);








