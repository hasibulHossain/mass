//dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './store/index'

//components
import './index.scss';
import App from './App';
import ScrollTop from './Components/scrollTop/scrollTop';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ScrollTop />
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);