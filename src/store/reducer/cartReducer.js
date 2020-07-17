import * as actionTypes from '../actions/actionTypes';

const initialState = {
   onCart: [],
   productDetails: null
}

const cartReducer = (state = initialState, action) => {
   switch (action.type) {
      case actionTypes.PRODUCT_DETAILS:
         return {
            ...state,
            productDetails: action.payload.product 
         }

      case actionTypes.ADD_TO_CART:
         //remove duplicate product from curt on the fly
         const filteredArr = state.onCart.concat(state.productDetails).reduce((acc, current) => {
            const x = acc.find(product => product.id === current.id); //
            if (!x) {
              return acc.concat([current]);
            } else {
              return acc;
            }
         }, []);

         return {
            ...state,
            onCart: filteredArr
         }

      case actionTypes.REMOVE_FROM_CART:
         const filtered = state.onCart.filter((product) => product.id !== action.payload.id)
         return {
            ...state,
            onCart: filtered
         }
   
      default:
         return state
   }
}

export default cartReducer;