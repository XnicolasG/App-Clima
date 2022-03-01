import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './routers/App';
import { store } from './store/store';
import './styles/Out.css'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

