import * as actionTypes from '../actions/actionTypes';

const initialState = {
   products: []
}

const productsReducer = (state = initialState, action) => {
   switch (action.type) {
      case actionTypes.PRODUCTS_INIT:
         return {
            ...state,
            products: action.products
         }
         
      default:
         return state;
   }
}

export default productsReducer;