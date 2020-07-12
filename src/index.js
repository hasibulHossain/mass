//dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';

//components
import './index.scss';
import App from './App';
import ScrollTop from './Components/scrollTop/scrollTop';

//reducers
import uiReducer from './store/reducer/uiReducer';
import cartReducer from './store/reducer/cartReducer';
import productsReducer from './store/reducer/productsReducer';

// connect with redux dewool
const composeEnhancers = (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const rootReducer = combineReducers({
  uiRTR: uiReducer,
  cartRTR: cartReducer,
  productsRTR: productsReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

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