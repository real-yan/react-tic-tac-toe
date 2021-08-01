import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { LangProvider } from './context/LangContext'

import store from './store';

import App from './components/templates/App';

import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <LangProvider>
      <Provider store={store} >
        <App />
      </Provider>
    </LangProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
