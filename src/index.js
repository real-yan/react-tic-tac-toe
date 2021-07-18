import React from 'react';
import ReactDOM from 'react-dom';

import { LangProvider } from './context/LangContext'

import App from './components/templates/App';

import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
