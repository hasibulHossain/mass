import { combineReducers } from 'redux';

//reducers
import uiReducer from './uiReducer';
import cartReducer from './cartReducer';
import productsReducer from './productsReducer';
import { firebaseReducer } from 'react-redux-firebase';


export default combineReducers({
   uiRTR: uiReducer,
   cartRTR: cartReducer,
   productsRTR: productsReducer,
   firebase: firebaseReducer,
});